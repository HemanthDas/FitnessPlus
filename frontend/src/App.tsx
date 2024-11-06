import "./App.css";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return <h1>Hello WOrld</h1>;
}

export default App;
