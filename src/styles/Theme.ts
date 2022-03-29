const mediaSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const theme = {
  color: {
    beige: '#f7f6f2',
    grey: '#c8c6c6',
    blue: '#4b6587',
    cream: '#f0e5cf',
  },
  device: {
    mobileS: `(min-width: ${mediaSize.mobileS})`,
    mobileM: `(min-width: ${mediaSize.mobileM})`,
    mobileL: `(min-width: ${mediaSize.mobileL})`,
    tablet: `(min-width: ${mediaSize.tablet})`,
    laptop: `(min-width: ${mediaSize.laptop})`,
    laptopL: `(min-width: ${mediaSize.laptopL})`,
    desktop: `(min-width: ${mediaSize.desktop})`,
  }
};