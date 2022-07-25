import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import Quote from '../components/Quote'
import Introduction from '../components/Introduction'

const colors = [
  '#2E0249',
  '#570A57',
  '#15133C',
  '#2A2550',
  '#E04D01',
  '#541212',
  '#3E065F',
  '#3D0000',
  '#2C061F',

]

const backColors = [
  '#F806CC',
  '#A91079',
  '#EC994B',
  '#826F66',
  '#F582A7',
  '#AEFEFF',
  '#ECDBBA',
  '#E9A6A6',
  '#8E05C2',
  '#FFDD93',
]

function App() {

  const randomNumber = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getRandomQuote = array => {
    const i = randomNumber(array)
    return array[i]
  }

  let indexRandomBackColors = randomNumber(backColors)

  const [randomQuote, setRandomQuote] = useState(getRandomQuote(quotes))
  const [randomColor, setRandomColor] = useState(getRandomQuote(colors))
  const [randomBackColor, setRandomBackColor] = useState(backColors[indexRandomBackColors])
  const [search, setSearch] = useState()

  const appStyle = {
    backgroundColor: randomBackColor,
  }
  const cardStyle = {
    backgroundColor: randomColor,
  }

  const click = () => {
    setRandomQuote(getRandomQuote(quotes))
    setRandomColor(getRandomQuote(colors))
    setRandomBackColor(backColors[indexRandomBackColors])
  }

  return (
    <div className="App" style={appStyle}>
      <div className="container" style={cardStyle} >
        {
          search ?
            <Quote
              randomQuote={randomQuote}
              click={click}
            />
            :
            <Introduction
              search={search}
              setSearch={setSearch}
              click={click}
            />
        }
      </div >
    </div >
  )
}

export default App
