import React from 'react';
import { Card, Button } from 'react-bootstrap';
import FourthComp from './FourthComp';
import SecondComp from './SecondComp';
import ThirdComp from './ThirdComp';
import { useDispatch } from 'react-redux';
import { addOne, subOne, addFive, subFive, addTen, subTen} from '../actions/index';


function FirstComp() {
    const dispatch = useDispatch()
    return (
        <div>
            <Card>
                <Card.Header>Redux Practice</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Button className="operator-btn" onClick={() => dispatch(addOne())}>+</Button>
                    <Button className="operator-btn" onClick={() => dispatch(subOne())}>-</Button>
                    <Button className="operator-btn" onClick={() => dispatch(addFive())}>+5</Button>
                    <Button className="operator-btn" onClick={() => dispatch(subFive())}>-5</Button>
                    <Button className="operator-btn" onClick = {() => dispatch(addTen()) }>+10</Button>
                    <Button className="operator-btn" onClick={() => dispatch(subTen())}>-10</Button><br/>
                    <Button variant="primary">Parent Comp -- Reset</Button>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            SecondComp<br />
                            <SecondComp />
                            </div>
                        <div className="col-md-4">
                            ThirdComp<br />
                            <ThirdComp />
                            </div>
                        <div className="col-md-4">
                            ForthComp<br />
                            <FourthComp />
                            </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FirstComp
