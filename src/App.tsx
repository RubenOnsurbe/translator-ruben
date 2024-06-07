import './App.css'
import { useStore } from './hooks/useStore'

function App() {
  const { fromLanguage, setFromLanguage } = useStore()
  return (
    <div className="App">
      <h1>Translator Ruben</h1>
      <button onClick={() => {
        setFromLanguage('es')
      }}>Cambiar a Español</button>
      {fromLanguage}
    </div>
  )
}

export default App
