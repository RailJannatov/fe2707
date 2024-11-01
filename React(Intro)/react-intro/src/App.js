import "./App.css";

import { Card, Test } from "./components/Card";

//jsx
function App() {
  const handleClick = () => {
    console.log("salam");
  };

  const UiText = () => <p>this is component inside App</p>;

  return (
    <div className="App">
      <div onClick={handleClick}>sal;ammmmm</div>
      <Card />
      <UiText />
      <Test />
    </div>
  );
}

export default App;
