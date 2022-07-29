import GoalItem from "./GoalItem";
import styles from "./GoalsList.module.css";

const GoalsList = (props) => {
  const getItemToDelete = (itemid) => {
    props.appDelete(itemid);
  };
  if (props.items.length > 0) {
    return (
      <div>
        {props.items.map((item) => (
          <GoalItem
            id={item.id}
            text={item.text}
            onDelete={getItemToDelete}
          ></GoalItem>
        ))}
      </div>
    );
  } else {
    return (
      <p className={styles["no-goals"]}>
        <b>You're done! :D</b>
      </p>
    );
  }
};

export default GoalsList;
