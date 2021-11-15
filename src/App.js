import React from 'react';
import Webcam from 'react-webcam';
import * as Perse from '@cyberlabsai/perse-sdk-js'

import Container from './components/atoms/Container';
import Column from './components/atoms/Column';
import PhotoMemory from './components/molecules/PhotoMemory';
import FaceChecker from './components/organisms/FaceChecker';

Perse.init(process.env.REACT_APP_PERSE_KEY);

const styles = {
  webcam: {
    maxWidth: '400px'
  },
  button: {
    padding: 8,
    margin: 8
  }
}

const App = () => {
  const webcamRef = React.useRef(null);
  const [original, setOriginal] = React.useState(null);
  const [toCompare, setToCompare] = React.useState(null);

  const captureOriginal = React.useCallback(() => {
    setOriginal(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  const captureToCompare = React.useCallback(() => {
    setToCompare(webcamRef.current.getScreenshot());
  }, [webcamRef]);

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
