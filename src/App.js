import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/data";
// import data from './components/Data';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card--container">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
