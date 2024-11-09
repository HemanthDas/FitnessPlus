import "./App.css";
import { checkOnce } from "./firebase/userApi";
import { useAuth } from "./hooks/useAuth";
function App() {
  const { token } = useAuth();
  const checkFunction = async () => {
    const res = await checkOnce({ getIdToken: token });
    console.log(res);
  };
  checkFunction();
  return <h1>Hello WOrld</h1>;
}

export default App;
