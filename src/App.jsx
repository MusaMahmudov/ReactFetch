import "./App.scss";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="all">
      <Navbar Url="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  );
}

export default App;
