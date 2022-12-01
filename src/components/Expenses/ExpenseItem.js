import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
const [title, setTitle] = useState(props.title); //1 posicao eh a variavel e a segunda é a funcao que atualiza
const [id, setid] = useState();

const clickHandler = () => {
    setTitle('Updated!');
    setid('change-id');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2  id={id}>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
                <button onClick={clickHandler} type="button">Change Title</button>
        </Card>
    );
}

export default ExpenseItem;