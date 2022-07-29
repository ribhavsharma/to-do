import styles from "./GoalItem.module.css";
import Card from "../UI/Card";

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div onClick={deleteHandler}>
      <Card className={styles["goal-item"]}>
        <p>{props.text}</p>
      </Card>
    </div>
  );
};

export default GoalItem;
