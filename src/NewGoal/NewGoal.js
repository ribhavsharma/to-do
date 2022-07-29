import styles from "./NewGoal.module.css";
import { useState } from "react";

const NewGoal = (props) => {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const textChangeHandler = (event) => {
    setIsValid(true);
    setText(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSave(text);

    setText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${styles['form-control']}
     ${!isValid && styles.invalid}`}
      >
        <label>Goal?</label>
        <input type="text" value={text} onChange={textChangeHandler} />
        {!isValid && <p className="invalid-text">This field is required.</p>}
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
