import { useEffect, useState } from 'react';
import * as Perse from '@cyberlabsai/perse-sdk-js'

const styles = {
  good: {
    padding: 8,
    border: '1px solid green',
    color: 'green',
    marginBottom: 16,
  },
  bad: {
    padding: 8,
    border: '1px solid orange',
    color: 'orange',
    marginBottom: 16,
  },
  calculating: {
    padding: 8,
    border: '1px solid gray',
    color: 'gray',
    marginBottom: 16,
  }
}

const Base64ToFile = async (name = 'image', base64) => {
  const response = await fetch(base64);
  const blob = await response.blob();
  const file = new File([blob], name,{ type: "image/png" })
  return file;
}

export const FaceChecker = ({images}) => {
  const [result, setResult] = useState(null);
  const [calculating, setCalculating] = useState(false);

  useEffect(() => {(async () => {
    if (images.length < 2) {
      return;
    }

    setCalculating(true);
    try {
      const original = await Base64ToFile('Original image', images[0]);
      const toCompare = await Base64ToFile('Image to compare', images[1]);

      const compareResult = await Perse.face.compare(original, toCompare);
      setResult(compareResult.status && compareResult.similarity >= compareResult.defaultThresholds.similarity);
    } catch (error) {
      console.log(error);
    } finally {
      setCalculating(false);
    }
  })();}, [images]);

  if (calculating) {
    return <span style={styles.calculating}>Calculating result...</span>;
  }

  if (result === null) {
    return null;
  }


  return result ?
    <span style={styles.good}>Same person</span> :
    <span style={styles.bad}>Different person</span>;;
};

export default FaceChecker;
