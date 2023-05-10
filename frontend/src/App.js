


import './App.css';
import {SlotMachine, Player} from './componentes/SlotMachine/slotMachine';


const player = new Player("Bernardo");

function App() {
  return (
    <div className="App">
      <SlotMachine Player={"player"}/>
    </div>
  );
}

export default App;
