import generateColors from '@elemental-design/coloralgorithm';

const baseSpec = {
  // Number of colors
  steps: 11,
  // Hue Start Value (0 - 359)
  hue_start: 315,
  // Hue End Value (0 - 359)
  hue_end: 293,
  // Hue Curve (See Curves Section)
  hue_curve: 'easeInQuad',
  // Saturation Start Value (0 - 100)
  sat_start: 4,
  // Saturation End Value (0 - 100)
  sat_end: 90,
  // Saturation Curve (See Curves Section)
  sat_curve: 'easeOutQuad',
  // Saturation Rate (0 - 200)
  sat_rate: 130,
  // Luminosity Start Value (0 - 100)
  lum_start: 100,
  // Luminosity End Value (0 - 100)
  lum_end: 53,
  // Luminosity Curve (See Curves Section)
  lum_curve: 'easeOutQuad',
  // Modifier Scale
  // Every generated color gets a modifier (label) that
  // indicates its lightness. A value of 10 results in
  // two-digit modifiers. The lightest color will be 0 (e.g. Red 0)
  // and the darkest color will be 100 (e.g. Red 100), given
  // that you generate 11 colors
  modifier: 10,
};

const algorithmConfig = {
  ...baseSpec,
  sat_start: 12,
  sat_end: 90,
  sat_rate: 130,
  lum_start: 100,
  lum_end: 26,
  hue_start: 315,
  hue_end: 293,
  steps: 10,
};

const generateFamily = (config) => generateColors({
  specs: {
    ...algorithmConfig,
    ...config,
  },
});

export default generateFamily;
