import { useState, useEffect } from "react";
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

const StatisticsLine = ({ text, value, ending }) => {
  return (
    // <p>
    //   {text} {value}
    //   {ending}
    // </p>
    <tr>
      <td>{text}</td>
      <td>
        {value} {ending}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, count, average, positive }) => {
  if (count === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <h1>Statistics</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <StatisticsLine text="Good :" value={good} />
        <StatisticsLine text="Neutral :" value={neutral} />
        <StatisticsLine text="Bad :" value={bad} />
        <StatisticsLine text="All :" value={count} />
        <StatisticsLine text="Average: " value={average} />
        <StatisticsLine text="Positive :" value={positive} ending="%" />
      </tbody>
    </table>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [count, setCount] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const addGood = () => {
    const added = good + 1;
    setGood((prev) => prev + 1);
    const countAdded = count + 1;
    setCount(countAdded);
  };

  const addNeutral = () => {
    setNeutral((prev) => prev + 1);
    console.log("neutral", neutral);
    setCount(count + 1);
    console.log("count in neutral", neutral);
  };

  const addBad = () => {
    setBad(bad + 1);
    console.log("bad", bad);
    setCount(count + 1);
    console.log("count in bad", bad);
  };

  const calculateAverage = () => {
    const goodValue = good * 1;
    const neutralValue = neutral * 0;
    const badValue = bad * -1;
    const total = goodValue + neutralValue + badValue;
    const calculated = total / count;

    setAverage(calculated);
  };

  const calculatePositive = () => {
    const calculated = (good / count) * 100;
    setPositive(calculated);
  };

  useEffect(() => {
    calculateAverage();
    calculatePositive();
  }, [good, bad, neutral]);

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
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            average={average}
            positive={positive}
            count={count}
          />
        </div>
      </div>
    </>
  );
}

export default App;
