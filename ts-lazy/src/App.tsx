import { Suspense, useState } from "react";

import Counter from "./components/Counter";

// const Counter = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./components/Counter")), 1200);
//   });
// });

function App() {
  const [state, setState] = useState(false);

  // const name = "s";

  // const calcuateValue = useMemo(() => (5 * 4) / 20, []);

  // const handleClick = useCallback(() => {
  //   setState((prev) => !prev);
  // }, []);

  return (
    <>
      {state ? (
        // <Suspense fallback={<div>...Loading</div>}>
        <Counter />
      ) : (
        // </Suspense>
        <h1>False</h1>
      )}

      <button onClick={() => setState((prev) => !prev)}>Click me </button>
    </>
  );
}

export default App;
