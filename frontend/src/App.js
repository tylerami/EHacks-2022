import "./App.css";
import Login from "./components/login";
import { useState } from "react";
import Dashboard from "./components/dashboard";

function App() {
  const [uid, setuid] = useState(null);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
