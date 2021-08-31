import React from 'react';
import { useSelector } from 'react-redux';

function ThirdComp() {
    const myState = useSelector((state) => state.changeNumByFive)
    return (
        <div>
            <h4>Add +5</h4>
            <h4>Add +10</h4>
            <h4>Count: {myState}</h4>
        </div>
    )
}

export default ThirdComp
