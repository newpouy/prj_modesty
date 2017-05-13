import React from 'react';

class FriendCollection extends React.Component {
    render(){
        return(
            <li className="collection-item avatar">
                {/*<img src="images/yuna.jpg" alt="" class="circle" /> 추후 이미지 사용시 사용*/}
                <i className="material-icons circle green">insert_chart</i>
                <span className="title">{this.props.data.userId}</span>
                <p>{this.props.data.userName}<br />
                    {this.props.data.status}
                </p>
            </li>
        );
    }
}

FriendCollection.propTypes = {
    data: React.PropTypes.object
};

FriendCollection.defaultProps = {
    data: {
        _id: 'id12367890',//db 상에 저장된 id
        userId : 'userId',
        userName: 'Name',
        profile : {
            address : 'address',
            gender : 'gender',
            birthday : 'birthday',
            bloodGroup : 'bloodGroup',
            memo: 'memo',
            open : 'group'
        },
        status: 'status'//친구 등록인지 아닌지 상태. db에서 뽑아내고 한번 가공 해서 집어 넣어야 함
    }
};

export default FriendCollection;
