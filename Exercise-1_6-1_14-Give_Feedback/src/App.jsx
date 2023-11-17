import { useState } from "react";
import "./App.css";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Header = () => {
  return (
    <div>
      <h1>Give Feedback</h1>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [count, setCount] = useState(0);
  const [average, setAverage] = useState(0);

  const addGood = () => {
    const added = good + 1;
    setGood((prev) => prev + 1);
    console.log("AddGood good:", good);
    const countAdded = count + 1;
    setCount(countAdded);
    console.log("AddGood count:", count);
    // calculateAverage();
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
    setCount(count + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
    setCount(count + 1);
  };

  // const calculateAverage = () => {
  //   const goodValue = good * 1;
  //   const neutralValue = neutral * 0;
  //   const badValue = bad * -1;

  //   const total = goodValue + neutralValue + badValue;

  //   console.log("goodValue", goodValue);

  //   console.log("Total", total);

  //   console.log("Count", count);

  //   const calculated = total / count;

  //   setAverage(calculated);

  //   console.log("Average", average);
  // };

  return (
    <>
      <div>
        <Header />

        <div>
          <Button handleClick={addGood} text="Good" />
          <Button handleClick={addNeutral} text="Neutral" />
          <Button handleClick={addBad} text="Bad" />
        </div>

        <div>
          <h1>Statistics</h1>
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>All: {count}</p>
            <p>Average: {average}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
