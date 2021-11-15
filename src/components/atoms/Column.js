import React from 'react';

const Column = props => React.createElement('div', {
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ...props,
});

export default Column;
