import React from "react";


const Card = ({ name, username, email, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt ='robot' src={`https://robohash.org/${id}test1?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;