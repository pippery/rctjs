import './Card.css';
function Card (props)
{
    //this will make the other styles on expense items to be applied to the card as well
    // i.e any class added to the props is added to the card class
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{ props.children }</div>
    )
}

export default Card;