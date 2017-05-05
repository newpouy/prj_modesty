import mongoose from 'mongoose';

//회원
const Account = new Schema({
    username: String,
    password: String,
    created: { type: Date, default: Date.now },
    profile : {
        address : String,
        gender : String,
        birthday : String,
        bloodGroup : String,
        memo: String,
        open : String
    },
    friends : [{
        userId : String,
        status : String,
        class: String
    }],
    status: String
});

//페이지
const Page = new Schema({
    name: String,
    logo: String,
    createDate: { type: Date, default: Date.now },
    type : String,
    follower : [{
        userId : String,
        status : String
    }],
    info : {
        createUserId : String,
        location : String
    },
    status : String
});

//그룹
const Group = new Schema({
    name: String,
    logo: String,
    createDate: { type: Date, default: Date.now },
    type : String,
    member : [{
        userId : String,
        status : String
    }],
    info : {
        createUserId : String,
        location : String
    },
    status : String
});

//게시글
const Post = new Schema({
    writer: String,
    contents: String,
    starred: [String],
    parent : String,
    date: {
        created: { type: Date, default: Date.now },
        edited: { type: Date, default: Date.now }
    },
    status : String,
    publishingScope: String
});
