import React, { useState } from 'react';

const User = ({name}) => {
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(1);

    return (
        <div className='user-card'>
            <h1>count: {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Address: Dhaka, Bnagladesh</h3>
            <h3>Contact: +8801990637762</h3>
        </div>
    );
};

export default User;