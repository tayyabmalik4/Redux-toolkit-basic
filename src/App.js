
import './App.css';
import Coin from './features/Coin/Coin';
import Counter from './features/counter/Counter';
import CounterRedux from './features/counter/Counter_With_Redux'
import Theme from './features/Theme/Theme';



function App() {

  return (
    <div className="App">
      <CounterRedux/>
      <Coin/>
      <Theme/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
