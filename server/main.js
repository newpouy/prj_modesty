import express from 'express';
import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

import mongoose from 'mongoose';
import session from 'express-session';

import api from './routes';

import {
  GraphQLObjectType,
  GraphQLSchema
 } from 'graphql'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'

// Import GraphQL Queries
import userQueries from './models-g/user/userQueries'

// Import GraphQL Mutations
import userMutations from './models-g/user/userMutations'

// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
 name: 'Query',
 description: 'Realize Root Query',
 fields: () => ({
   user: userQueries.user,
   users: userQueries.users,
   userId: userQueries.userId,
   userByName: userQueries.userByName
 })
})

// Setup GraphQL RootMutation
let RootMutation = new GraphQLObjectType({
 name: 'Mutation',
 description: 'Realize Root Mutations',
 fields: () => ({
   addUser: userMutations.addUser,
   updateUser: userMutations.updateUser
 })
})

// Set up GraphQL Schema with our RootQuery and RootMutation
let schema = new GraphQLSchema({
 query: RootQuery,
 mutation: RootMutation
})
var proxy = require('http-proxy-middleware');
const app = express();
const port = 3003;
const devPort = 4003;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(proxy('/api', {target: 'http://localhost:9091', changeOrigin: true}));
/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/codelab');

/* use session */
app.use(session({
    secret: 'CodeLab1$1$234',
    resave: true,
    saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, './../public')));

//app.use('/graphql', function(){console.log('gggg');});
app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))

/* setup routers & static directory */
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

/* handle error */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}
