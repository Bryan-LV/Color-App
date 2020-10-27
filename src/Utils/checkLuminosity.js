import chroma from "chroma-js";

const checkLum = (backgroundColor) => {
  // get background color
  const color = chroma(backgroundColor).luminance();
  // check if color is dark or light
  // if color is light, text is dark and vice versa
  // 0 = dark 1 = light
  // color luminance less than 0.3 text color should be white
  if (color >= 0.3) {
    return 'text-dark'
  } else {
    return 'text-white'
  }
}
export default checkLum;