import { useState, useRef } from 'react'
import './Game.css'

function Game ({ 
    verifyLetter, pickedCategory, letters, guessedLetters, 
    wrongLetters, guesses, score 
  }) {
    const [letter, setLetter] = useState('')
    const letterInputRef = useRef (null)

    const handleSubmit = (event) => {
      event.preventDefault()

      verifyLetter (letter)
      setLetter('')

      letterInputRef.current.focus()
    }

  return (
    <div className='game'>
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica da palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Tentativas restantes: {guesses}</p>

      <div className="wordContainer">
        {letters.map ((letter, index) => (
          guessedLetters.includes (letter) ? (
            <span key={index} className="letter">{letter}</span>
          ) : (
            <span key={index} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Adivinhe a letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name='letter' maxLength='1' required
            onChange={(event) => setLetter (event.target.value)} value={letter} 
            ref={letterInputRef}
            />

          <button>Jogar!</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras utilizadas:</p>
        {wrongLetters.map ((letter, index) => (
          <span key={index} className="wrongLetter">{letter}</span>
        ))}
      </div>
    </div>
  )
}

export default Game