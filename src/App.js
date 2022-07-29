import GoalsList from "./Goals/GoalsList";
import NewGoal from "./NewGoal/NewGoal";
import "./App.css";
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
      <section id="goal-form">
        <NewGoal onSave={addGoalHandler} />
      </section>
      <section id="goals">
        <GoalsList
          items={courseGoals}
          id="goals"
          appDelete={appDeleteHandler}
        ></GoalsList>
      </section>
    </div>
  );
}

export default App;
