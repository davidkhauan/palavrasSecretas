import './GameOver.css'

function GameOver ({ retry, score }) {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>Pontuação adquirida: <span>{score}</span></h2>
      <button onClick={retry}>Recomeçar</button>
    </div>
  )
}

export default GameOver