import GoalsList from "./Goals/GoalsList";
import NewGoal from "./NewGoal/NewGoal";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Take Fido out for a walk.", id: "g1" },
    { text: "Finish MLH Fellowship application.", id: "g2" },
  ]);

  const addGoalHandler = (text) => {
    setCourseGoals((prevState) => {
      const updated = [...prevState];
      updated.unshift({ text: text, id: Math.random().toString() });
      return updated;
    });
  };

  const appDeleteHandler = (id) => {
    setCourseGoals((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <div>
      <section className={styles["goal-form"]}>
        <NewGoal onSave={addGoalHandler} />
      </section>
      <section className={styles["goals"]}>
        <GoalsList items={courseGoals} appDelete={appDeleteHandler}></GoalsList>
      </section>
    </div>
  );
}

export default App;
