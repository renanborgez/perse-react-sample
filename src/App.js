import React, { useEffect } from 'react';
import Webcam from 'react-webcam';
import * as Perse from '@cyberlabsai/perse-sdk-js'

import Container from './components/atoms/Container';
import Column from './components/atoms/Column';
import PhotoMemory from './components/molecules/PhotoMemory';
import FaceChecker from './components/organisms/FaceChecker';

const styles = {
  webcam: {
    maxWidth: '400px'
  },
  button: {
    padding: 8,
    margin: 8
  },
  input: {
    padding: 8,
    width: '100%',
    margin: 8,
    textAlign: 'center'
  }
}

const App = () => {
  const webcamRef = React.useRef(null);
  const [input, setInput] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [original, setOriginal] = React.useState(null);
  const [toCompare, setToCompare] = React.useState(null);

  const captureOriginal = React.useCallback(() => {
    setOriginal(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  const captureToCompare = React.useCallback(() => {
    setToCompare(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  useEffect(() => {
    if (token) {
      Perse.init(token);
    }
  }, [token])

  if (!token) {
    return (
      <Container>
        <Column>
          Type your Perse token here
          <input type="text" style={styles.input} value={input} onChange={e => setInput(e.target.value)} />
          <button style={styles.button} onClick={() => setToken(input)} type="button">Save</button>
        </Column>
      </Container>
    )
  }

  return (
    <Container>
      <Column>
        <PhotoMemory original={original} toCompare={toCompare} />
        {original && toCompare && <FaceChecker images={[original, toCompare]} />}
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" style={styles.webcam} />
        <button style={styles.button} onClick={captureOriginal}>Capture original</button>
        <button style={styles.button} onClick={captureToCompare}>Capture photo to compare</button>
      </Column>
    </Container>
  );
};

export default App;
