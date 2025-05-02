const getColorName = ({ r, g, b }) => {
    const toHex = (c) => c.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };
  
  export default getColorName;
  