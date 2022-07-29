import GoalItem from './GoalItem'
import './GoalsList.css'

const GoalsList = (props) =>{
    const getItemToDelete = (itemid) => {
      props.appDelete(itemid)
    }
     if(props.items.length>0){
    return(
    <div className='goals-list'>
    {props.items.map(item =>
        <GoalItem id= {item.id} text={item.text} onDelete={getItemToDelete}></GoalItem>)}
    </div>)
}

else{
    return(<p className='no-goals'><b>You're done! :D</b></p>)
}
}

export default GoalsList