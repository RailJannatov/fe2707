import "./App.css";
import { Card } from "./components/Card";

// literal type
let size: "XS" | "S" | "M" | "L" | "XL";

let weekdays: 1 | 2 | 3 | 4 | 5 | 6 | 7;

let status: "SUCCESS" | "ERROR" | "LOADING" = "SUCCESS";

let fixedArray: [number, string, boolean] = [1, "string", true];
// union
let mixArray: (string | number | boolean)[] = [1, "2", 1, "4", false];

fixedArray[1] = 2;

// size = "Mehdi";

// console.log(size);

weekdays = 2;
function App() {
  const data: Array<Person> = [
    { age: 20, name: "John", surname: "Doe", isMarried: false },
  ];

  return (
    <>
      <Card title="title" description="description" price={4} />
    </>
  );
}

export default App;
