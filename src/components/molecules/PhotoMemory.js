import React from 'react';

import Column from '../atoms/Column';

const styles = {
  container: {
    display: 'flex',
    columnGap: 8,
    padding: 16
  },
  img : {
    maxWidth: '100px'
  }
};

const PhotoMemory = ({original, toCompare}) => {
  if (!original) {
    return null;
  }

  return (
    <div style={styles.container}>
      <Column>
        <img src={original} alt="First capture" style={styles.img} />
        <span>Original</span>
      </Column>
      {toCompare && <Column>
        <img src={toCompare} alt="To be compared" style={styles.img} />
        <span>To be compared</span>
      </Column>}
    </div>
  )
};

export default PhotoMemory;
