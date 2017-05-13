import React from 'react';
import { FriendCollection } from 'components';

class FriendList extends React.Component {
    render() {
        const mapToComponents = data => {
            console.log(12345);
            return data.map((friendInfo, i) => {
                return (
                    <FriendCollection data={friendInfo}/>
                );
            });
        };

        return(
            <ul className="collection friend-list">
                {mapToComponents(this.props.data)}
            </ul>
        );
    }
}

FriendList.propTypes = {
    data: React.PropTypes.array
};

FriendList.defaultProps = {
    data: []
};

export default FriendList;
