


import './App.css';
import {SlotMachine, Player} from './componentes/SlotMachine/slotMachine';


const bernardo = new Player("Bernardo");

function App() {
  return (
    <div className="App">
      <SlotMachine Player={bernardo}/>
    </div>
  );
}

export default App;
