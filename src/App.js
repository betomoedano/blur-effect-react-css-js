import Background from "./Background";
import "./styles.css";

const pic =
  "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80";

export default function App() {
  return (
    <div className="App">
      <Background />
      <h1>Code With Beto!</h1>
      <div className="card">
        <img alt="dog" src={pic} className="photo" />
        <h1>@Betomoedano</h1>
        <button className="button">Follow</button>
      </div>
    </div>
  );
}
