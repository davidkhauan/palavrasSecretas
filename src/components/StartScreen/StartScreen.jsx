import "./StartScreen.css"

function StartScreen ({ startGame }) {
  return (
    <div className="start">
      <h1>Palavras Secretas</h1>
      <p>Clique no botão para jogar</p>
      <button onClick={startGame}>Começar</button>
    </div>
  )
}

export default StartScreen