import { useState } from "react";
import SignIn from "./components/auth/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
