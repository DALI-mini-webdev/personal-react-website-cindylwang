import React from 'react';

const UserPosting = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.userURL} alt = 'Image'/>
        </div>
    );
}

export default UserPosting;