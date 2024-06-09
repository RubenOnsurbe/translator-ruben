import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE, VOICE_LANGUAGES } from './constants'
import { ArrowsIcon, CopyIcon, SoundIcon } from './icons'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const { loading, fromLanguage, fromText, toLanguage, result, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult } = useStore()

  const debouncedFromText = useDebounce(fromText, 300);

  useEffect(() => {
    if (debouncedFromText === '') return;

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        if (result == null) return;
        setResult(result);
      })
      .catch(console.error);
  }, [debouncedFromText, fromLanguage, toLanguage]);

  const handleCopy = () => {
    navigator.clipboard.writeText(result).catch(() => { })
  }

  const handleVoice = () => {
    const utterance = new SpeechSynthesisUtterance(result);
    console.log(VOICE_LANGUAGES[toLanguage]);
    utterance.lang = VOICE_LANGUAGES[toLanguage];
    utterance.volume = 0.5;
    utterance.rate = 0.75;
    speechSynthesis.speak(utterance);
  }

  return (
    <Container fluid className="p-3">
      <h1 className="text-center mb-4">Translator Ruben</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={5} className="mb-3 mb-md-0">
          <Stack gap={2}>
            <LanguageSelector type='from' value={fromLanguage} onChange={setFromLanguage} />
            <TextArea loading={loading} type='from' value={fromText} onChange={setFromText} />
          </Stack>
        </Col>
        <Col xs='auto' className="d-flex align-items-center mb-3 mb-md-0">
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><ArrowsIcon /></Button>
        </Col>
        <Col xs={12} md={5}>
          <Stack gap={2}>
            <LanguageSelector type='to' value={toLanguage} onChange={setToLanguage} />
            <div style={{ position: 'relative' }}>
              <TextArea loading={loading} type='to' value={result} onChange={setResult} />
              <div style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }}>
                <Button variant='link' onClick={handleCopy}>
                  <CopyIcon />
                </Button>
                <Button variant='link' onClick={handleVoice}>
                  <SoundIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
