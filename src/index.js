import chroma from 'chroma-js';
import chalk from 'chalk';

import generateFamily from './family';

// eslint-disable-next-line prefer-destructuring
const log = console.log; // eslint-disable-line no-console


const getHues = (({ light, dark, ...other }) => {
  const [lightHue] = chroma(light).hsl();
  const [darkHue] = chroma(dark).hsl();

  return {
    hue_start: lightHue,
    hue_end: darkHue,
    ...other,
  };
});


const generatePalette = (template = {
  reds: {
    light: '#FFDAD7',
    dark: '#420D00',
    lum_curve: 'easeOutCubic',
  },
  oranges: {
    light: '#FFE7D7',
    dark: '#422000',
  },
  yellows: {
    light: '#FFF9D7',
    dark: '#423E00',
  },
  greens: {
    light: '#DEFFD7',
    dark: '#004206',
    lum_end: 22,
  },
  blues: {
    light: '#D7F2FF',
    dark: '#0C004A',
    lum_end: 29,
  },
  purples: {
    light: '#E9D7FF',
    dark: '#280042',
    lum_end: 26,
  },
  pinks: {
    light: '#FCD7FF',
    dark: '#420038',
    lum_end: 26,
  },
}) => {
  const palettes = Object.entries(template).map(([color, hues]) => ({
    color,
    family: generateFamily(getHues(hues)),
  })).reduce((acc, { color, family }) => {
    acc[color] = family.map(({ hex }) => hex);

    return acc;
  }, {});

  return palettes;
};

export const logColors = (json) => {
  Object.entries(json).forEach(([color, family]) => {
    log(`\n${color}:\n`);

    family.forEach((hex) => log(chalk.bgHex(hex).whiteBright(hex)));
  });
};

export default generatePalette;
