import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './icons'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'

function App() {
  const { fromLanguage, fromText, toLanguage, result, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult } = useStore()
  return (
    <Container fluid>
      <h1>Translator Ruben</h1>
      <Row>
        <Col >
          <Stack gap={2}>
            <LanguageSelector type='from' value={fromLanguage} onChange={setFromLanguage} />
            <TextArea type='from' placeholder="Texto a traducir" value={fromText} onChange={setFromText} />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><ArrowsIcon /></Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type='to' value={toLanguage} onChange={setToLanguage} />
            <TextArea type='to' placeholder="Texto traducido" value={result} onChange={setResult} />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
