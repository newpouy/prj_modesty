import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import memoType from './memoType';
import memo from './memoSchema';

export default {
  addMemo:{
    type:memoType,
    args: {
      writer:{
        name:'writer',
        type:new GraphQLNonNull(GraphQLString)
      },
      contents:{
        name:'contents',
        type: new GraphQLNonNull(GraphQLString)
      },
      tel: {
        name:'tel',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: memo.addMemo
  },
  updateMemo:{
    type:memoType,
    args: {
      id:{
        type: GraphQLID
      },
      name:{
        name:'name',
        type:new GraphQLNonNull(GraphQLString)
      },
      email:{
        name:'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      tel: {
        name:'tel',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: memo.updateMemo
  }
};
