import './GoalItem.css'
import Card from '../UI/Card'

const GoalItem = (props) =>{

    const deleteHandler = () => {
      console.log('helo');
      props.onDelete(props.id)
    }

    return(
        <div onClick={deleteHandler}>
        <Card className='goal-item'>
            <p>{props.text}</p>
        </Card>
        </div>
        
    )
}

export default GoalItem