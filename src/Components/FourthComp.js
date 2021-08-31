import React from 'react';
import { useSelector } from 'react-redux';

function FourthComp() {
    const myState = useSelector((state) => state.changeNumByTen)
    return (
        <div>
            <h4>Substract -5</h4>
            <h4>Substract -10</h4>
            <h4>Count: {myState}</h4>
        </div>
    )
}

export default FourthComp;
