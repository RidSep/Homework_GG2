import data from './single-sample';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={data.album.images[1].url} className="App-logo" alt="logo" />
        <h2>{data.album.name}</h2>
        <h3>{data.album.artists[0].name}</h3>
        <button>Select</button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
