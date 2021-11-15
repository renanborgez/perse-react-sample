import React from 'react';

const Row = props => React.createElement('div', {
  style: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ...props,
});

export default Row;
