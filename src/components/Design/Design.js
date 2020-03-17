import React from 'react';
import './Design.css'
const Design = (props) => {
    //console.log(props);
    const { url, name, title } = props.friendInfo;
    return (
        <div>
            <div className="info">
                <div className="outlook">
                    <img src={url} />
                    <h4>{name}</h4>
                    <p>{title}</p>
                    <button onClick={() =>props.addSalary(props.friendInfo)}>Add Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Design;