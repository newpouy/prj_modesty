import React from 'react';
import { connect } from 'react-redux';
import { FriendList } from 'components';
/*import {
    friendListRequest
} from 'actions/friend';
*/

class Friends extends React.Component {

    constructor(props) {
        super(props);
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
                <FriendList data={dumyFriendLst}/>
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
        friendListRequest: (_id) => {
            return dispatch(friendListRequest(_id));
        }
    };
};

//차후 db에서 받아와 mapDispatchToProps 연결
export default connect(mapStateToProps, null)(Friends);
