
import { useState } from "react";
import './slotMachine.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Player{
    constructor(name){
        this.name = name;
        this.credits = 10; 
    }

}


// Definindo lógica do jogo >> 
function game (player, setWon) {
        
    let gameState = false;
    
    function roll (player){

        let results = [];
        const symbols = ['🍒', '🍋', '🍊', '🍉'];
        const values = {'🍒': 10, '🍋': 20, '🍊': 30,'🍉': 40};

        gameState = true;
        let won = false;
        player.credits -= 1;
        
        for (let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * symbols.length);
            const symbol = symbols[index]; 
            results.push(symbol);
                       
            }
            
            if (results[0] === results[1] && results[1] === results[2]) {
                const reward = values[results[0]];
                player.credits += reward;
                won = true;
                console.log(won)

        
            return `${results.join(' | ')}` ; 
        }

        if(player.credits <= 0){
            return `Game Over! You lost!`
            
        }
        return `${results.join(' | ')} \n `    
                
    }

    return roll(player)
}




// Jogo em si
function SlotMachine() {
    
    const [won, setWon] = useState('')
    const[player, setPlayer] = useState(new Player("player"))
    const [result, setResult] = useState('');
    const [gameOver, setGameOver] = useState(false);

    const handleButtonClick = () => {
        if (!gameOver) {
            const gameResult = game(player);
            setResult(gameResult);
            if(won) {
                setWon(true);
                toast.info('Mensagem de informação!', {
                    position: toast.POSITION.TOP_CENTER
                  });
                  
            }
            if (gameResult === 'Game Over! You lost!') {
                setGameOver(true);
            }
            setPlayer(prevPlayer => ({...prevPlayer}));
        }
    }
    
    
    return (
        <div className="div_center">
            <div className="box">
                
              <h2 className="resultado">{result || 'Start the game!'}</h2>
                <p className="credits_left">Credits: {player.credits} credits left</p>
                <button className="botao_maquina" onClick={handleButtonClick} disabled={gameOver}>
                    Spin!
                </button>
            </div>
        </div>
    );
}


 
export {Player, SlotMachine}