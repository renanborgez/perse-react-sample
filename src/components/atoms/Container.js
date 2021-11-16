import React from 'react';

const Container = props => React.createElement('div', {
  style: {
    maxWidth: '960px',
    margin: '0 auto',
    marginTop: 16
  },
  ...props,
});

export default Container;
