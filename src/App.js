import './App.css';
import Right from './components/Right';
import Left from './components/Left';
import Middle from './components/Middle';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Right></Right>
        <Left></Left>
        <Middle></Middle>
      </div>
    </div>
  );
}

export default App;
