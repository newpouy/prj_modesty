import React from 'react';
import { connect } from 'react-redux';
import { FriendList } from 'components';
/*import {
    searchFriendRequest
    , friendRequest
} from 'actions/friend';
*/

class searchFriend extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleRequest = this.handleRequest.bind(handleRequest);
    }

    handleRequest(_id, _friendId){
        //return this.props.friendRequest(_id, _friendId).then.();

        Materialize.toast('신청 완료!',2000);
    }
    render() {
        const dumyFriendLst = 
            [
                {
                _id: 'id12367890',
                    userId : 'userId1',
                    userName: 'Name1',
                    profile : {
                        address : 'address1',
                        gender : 'gender1',
                        birthday : 'birthday1',
                        bloodGroup : 'bloodGroup1',
                        memo: 'memo1',
                        open : 'group'
                    },
                    status: 'status'
                },
                {
                _id: 'id12367892',
                    userId : 'userId2',
                    userName: 'Name2',
                    profile : {
                        address : 'address2',
                        gender : 'gender2',
                        birthday : 'birthday2',
                        bloodGroup : 'bloodGroup2',
                        memo: 'memo2',
                        open : 'group'
                    },
                    status: 'status'
                },
                {
                _id: 'id12367893',
                    userId : 'userId3',
                    userName: 'Name3',
                    profile : {
                        address : 'address3',
                        gender : 'gender3',
                        birthday : 'birthday3',
                        bloodGroup : 'bloodGroup3',
                        memo: 'memo3',
                        open : 'group'
                    },
                    status: 'status'
                },
                {
                _id: 'id12367894',
                    userId : 'userId4',
                    userName: 'Name4',
                    profile : {
                        address : 'address4',
                        gender : 'gender4',
                        birthday : 'birthday4',
                        bloodGroup : 'bloodGroup4',
                        memo: 'memo4',
                        open : 'group'
                    },
                    status: 'status'
                }
            ];
        return (
            <div className="wrapper container">
                {
                    /**
                    db 연동시 props로 변경
                    <FriendList data={this.props.friendList}/>
                     */
                }
                <FriendList data={dumyFriendLst} isMyFriend={false} handleRequest={this.handleRequest}/>
            </div>
        );
    }
}

Friends.PropTypes = {
};

Friends.defaultProps = {
};

const mapStateToProps = (state) => {
    return {
        friendList: state.friend.list.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchFriendRequest: (_id) => {
            return dispatch(friendListRequest(_id));
        }
        , friendRequest: (_myId, _friendId)=>{
            return dispatch(friendRequest(_myId, _friendId));
        }
    };
};

//차후 db에서 받아와 mapDispatchToProps 연결
export default connect(mapStateToProps, null)(searchFriend);
