/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      powderblue: {
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#EEF8FA',
        400: '#CFECF0',
        500: '#B0E0E6',
        600: '#85CFD9',
        700: '#5BBFCB',
        800: '#39A7B5',
        900: '#2C7F8A',
        950: '#256C75',
      },
      peru: {
        DEFAULT: '#CD853F',
        50: '#F3E2D1',
        100: '#EFD7C0',
        200: '#E6C3A0',
        300: '#DEAE80',
        400: '#D59A5F',
        500: '#CD853F',
        600: '#A8692C',
        700: '#7C4D20',
        800: '#4F3115',
        900: '#231609',
        950: '#0C0803',
      },
      blanchedalmond: {
        DEFAULT: '#FFEBCD',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#FFFBF6',
        500: '#FFEBCD',
        600: '#FFD595',
        700: '#FFBE5D',
        800: '#FFA825',
        900: '#EC8D00',
        950: '#D07D00',
      },
      deeppink: {
        DEFAULT: '#FF1493',
        50: '#FFCCE7',
        100: '#FFB7DE',
        200: '#FF8ECB',
        300: '#FF66B9',
        400: '#FF3DA6',
        500: '#FF1493',
        600: '#DB0076',
        700: '#A30058',
        800: '#6B003A',
        900: '#33001B',
        950: '#17000C',
      },
      darkturquoise: {
        DEFAULT: '#00CED1',
        50: '#8AFDFF',
        100: '#75FDFF',
        200: '#4CFCFF',
        300: '#24FCFF',
        400: '#00F6FA',
        500: '#00CED1',
        600: '#009799',
        700: '#005F61',
        800: '#002829',
        900: '#000000',
        950: '#000000',
      },
      darkgray: {
        DEFAULT: '#A9A9A9',
        50: '#FFFFFF',
        100: '#FBFBFB',
        200: '#E6E6E6',
        300: '#D2D2D2',
        400: '#BDBDBD',
        500: '#A9A9A9',
        600: '#8D8D8D',
        700: '#717171',
        800: '#555555',
        900: '#393939',
        950: '#2B2B2B',
      },
      green: {
        DEFAULT: '#00FF7F',
        50: '#B8FFDB',
        100: '#A3FFD1',
        200: '#7AFFBC',
        300: '#52FFA8',
        400: '#29FF93',
        500: '#00FF7F',
        600: '#00C763',
        700: '#008F47',
        800: '#00572B',
        900: '#001F0F',
        950: '#000301',
      },
      chartreuse: {
        DEFAULT: '#7FFF00',
        50: '#DBFFB8',
        100: '#D1FFA3',
        200: '#BCFF7A',
        300: '#A8FF52',
        400: '#93FF29',
        500: '#7FFF00',
        600: '#63C700',
        700: '#478F00',
        800: '#2B5700',
        900: '#0F1F00',
        950: '#010300',
      },
      gray: {
        DEFAULT: '#808080',
        50: '#DCDCDC',
        100: '#D2D2D2',
        200: '#BDBDBD',
        300: '#A9A9A9',
        400: '#949494',
        500: '#808080',
        600: '#646464',
        700: '#484848',
        800: '#2C2C2C',
        900: '#101010',
        950: '#020202',
      },
      mediumorchid: {
        DEFAULT: '#BA55D3',
        50: '#F5E7F9',
        100: '#EFD7F5',
        200: '#E1B6EC',
        300: '#D496E4',
        400: '#C775DB',
        500: '#BA55D3',
        600: '#A331BF',
        700: '#7D2692',
        800: '#571A65',
        900: '#310F39',
        950: '#1E0923',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindscss/aspect-radio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
};

/**
 * Content: the `content` section is where you configure the paths to all
 * of your HTML templates, JS components, and any other files that contain
 * Tailwind class names.
 *
 * Theme: the `theme` section is where your color palette, fonts, type scale, border
 * sizes, breakpoints -- anything related to the visual design of your site
 *
 * plugins: The `plugins` section allows you to register plugins with tailwind that
 * can be used to generate extra utilities, components, base styles, or custom variants.
 *
 * Presets: the `presets` section allows you to specify your own custom base configuration instead
 * of using Tailwind's default base configuration
 *
 * Prefix": the `prefix` option allows you to add a custom prefix to all of Tailwind's generated utilities
 * classes. This can be really useful when layering Tailwind on top of existing CSS where there might be
 * naming conflicts
 *
 * Important: The `important` option lets you control whether or not Tailwind's utilities should be marked
 * with `!important`. This can be really useful when using Tailwind with existing CSS that has high speficity
 * selectors.
 *
 * Separator: the `separator` option lets you customize which character be used to separate modifiers
 * (screen sizes, `hover`, `focus`, etc.) from utilities names(`text-center`, `items-end`, etc.) We use a colon
 * by default(`:`), but it can be useful to change this if you're using a templating
 * language like Pug that doesn't support special characters in class names.
 *
 * Core Plugins: the `corePlugins` section lets you completely disable classes that Tailwind would normally
 * generate by default if you don't need them for your project. To disable specific core plugins, provide an
 * object for `corePlugins` that sets those plugins to `false`.
 */
