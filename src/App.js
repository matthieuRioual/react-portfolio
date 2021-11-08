import './App.css';
import Right from './components/Right';
import Left from './components/Left';
import Middle from './components/Middle';

function App() {

  return (

    <div className="App">
      
      <div className="container">
        <Left></Left>
        <Middle></Middle>
        <Right></Right>
      </div>

    </div >
  );
}

export default App;
