// components are functions that return html code
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem (props)
{
    // useState returns an array where the first value is the variable itself or current state value and the second is the updating function
    // 
    const [title, setTitle] = useState(props.title);
    
    function clickHandler ()
    {
        // now we call the updating function and pass the new value into it
        //hence the component fuunction is called and executed again when our state changes
        
        setTitle('Updated')
        console.log( title );
}
    return (
    <Card className="expense-item">   
            <ExpenseDate date={ props.date } />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick = {clickHandler}>Change</button>
    </Card>
      
    )
}
export default ExpenseItem;