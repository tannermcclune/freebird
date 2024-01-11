import logo from './logo.svg';
import './App.css';
import CountdownTimer from './components/CountdownTimer';


function App() {

  return (
    <div className="welcome">
      <img src={logo} className="logo" alt="logo" />
      <CountdownTimer targetDate="2024-2-21" />
    </div>
  );
}

export default App;
