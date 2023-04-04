const typography = {
  useNextVariants: true,
  fontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 900,
  h1: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.15,
  },
  h2: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.15,
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.15,
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.15,
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.15,
  },
  h6: {
    fontSize: '1.0625rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.15,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: -0.15,
    // fontFamily: "Open Sans"
    wordSpacing: 1,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: -0.15,
    // fontFamily: "Open Sans"
  },
  button: {
    textTransform: 'none',
  },
};

export default typography;
