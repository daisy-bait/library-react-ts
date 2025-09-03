
export const yellowButton = {
  fontSize: '16px',
  letterSpacing: '1px',
  padding: '10px 20px 10px',
  border: '2px solid black',
  cursor: 'pointer',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  position: 'relative',

  '&::after': {
    content: "",
    backgroundColor: '#ffe54c',
    width: '100%',
    zIndex: '-1',
    position: 'absolute',
    top: '6px',
    left: '6px',
    transition: '0.2s',
  },

  '&:hover:after': {
    top: '0px',
    left: '0px',
  },

} as React.CSSProperties;