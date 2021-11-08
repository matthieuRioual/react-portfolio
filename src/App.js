import './App.css';
import Right from './components/Right';
import Left from './components/Left';
import Middle from './components/Middle';
import BackgroundParticles from './components/BackgroundParticules'

function App() {

  return (

    <div className="App">
      <BackgroundParticles></BackgroundParticles>
      <div className="container">
        <Left></Left>
        <Middle></Middle>
        <Right></Right>
      </div>

    </div >
  );
}

export default App;
