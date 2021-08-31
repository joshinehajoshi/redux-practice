import React from 'react';
import { useSelector } from 'react-redux';

function SecondComp() {
    const myState = useSelector((state) => state.changeNumByOne)
    console.log('neha',myState);
    return (
        <div>
            <h4>Add 1</h4>
            <h4>Substarct 1</h4>
            <h4>Count: {myState}</h4>
        </div>
    )
}

export default SecondComp
