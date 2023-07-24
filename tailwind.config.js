const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const screens = [
  'sm',
  'smp',
  'md',
  'lg',
  'hd',
  '4k'
];

let containers = {
  'sm':  '360px',
  'smp': '480px',
  'md':  '768px',
  'lg':  '1100px',
  'hd':  '1440px',
  '4k':  '2560px'
};

let commonSizes = {
  'bar':     '60px',
  'tile':    '80px',
  'sidenav': '240px',
  'spanel':  '260px',
  'mpanel':  '320px',
  'panel':   '360px'
};

module.exports = {
  content:  [
    './scss/**/*.scss',
    './ts/**/*.ts',
    './demo/**/*.html',
    './elements/**/*.{ts,js,html,scss,css}'
  ],
  safelist: [
    {
      pattern:  /table-cell/,
      variants: screens
    }
  ],

  darkMode:    'class',
  theme:       {
    colors:     {
      bg:          '#F7F9FC',
      darkBg:      '#191D23',
      dark:        {
        '50':    '#f8fafc',
        '100':   '#f1f5f9',
        '200':   '#e2e8f0',
        '300':   '#cbd5e1',
        '400':   '#94a3b8',
        '500':   '#64748b',
        '600':   '#475569',
        '700':   '#3B444B',
        '800':   '#1D2129',
        '900':   '#191D23',
        '700-n': '#180048',
        '800-n': '#17013d',
        '900-n': '#110030'
      },
      darkBorderN: '#332250',
      darkBorder:  '#343840',
      darkTxt:     {
        900: 'rgba(255,255,255, 1)',
        800: 'rgba(255,255,255, 0.87)',
        600: 'rgba(255,255,255, 0.60)',
        400: 'rgba(255,255,255, 0.40)'
      },

      'border':        '#DCE1E9',
      'primary':       {
        50:  '#e5e4ef',
        100: '#bebcd8',
        300: '#6d68a4',
        400: '#524a92',
        500: '#372c80',
        600: '#322578',
        700: '#2b1c6d',
        800: '#231262',
        900: '#16004d'
      },
      'secondary':     {
        500: '#6836F5'
      },
      'darkSecondary': {
        500: '#9282ff'
      },
      'tertiary':      {
        100: '#CCEDEC',
        500: '#29C1BC',
        900: '#157A77'
      },
      'darkTertiary':  {
        100: '#CCEDEC',
        500: '#81e7ff',
        900: '#157A77'
      },
      txt:             {
        900: 'rgba(0, 0, 0, 1)',
        800: 'rgba(0, 0, 0, 0.87)',
        600: 'rgba(0, 0, 0, 0.60)',
        400: 'rgba(0, 0, 0, 0.40)'
      },
      transparent:     'transparent',
      'white':         '#FFFFFF',
      'black':         '#000000',

      'error':   '#ED546D',
      'info':    '#7DD3FC',
      'warning': '#FF6600',
      'success': '#3CD8BB',
      grey:      {
        400: '#7F8090'
      }
    },
    spacing:    {
      0:     '0px',
      'px':  '1px',
      'xxs': '3px',
      'xs':  '5px',
      'sm':  '10px',
      'md':  '15px',
      'lg':  '20px',
      'xl':  '25px',
      ...commonSizes
    },
    screens:    containers,
    containers: containers,
    fontSize:   {
      xs:    ['12px', {lineHeight: '18px'}],
      sm:    ['13px', {lineHeight: '18px'}],
      base:  ['14px', {lineHeight: '18px'}],
      lg:    ['14px', {lineHeight: '21px'}],
      xl:    ['16px', {lineHeight: '20px'}],
      '2xl': ['18px', {lineHeight: '21px'}],
      '3xl': ['20px', {lineHeight: '24px'}],
      '4xl': ['24px', {lineHeight: '29px'}]
    },
    extend:     {
      lineHeight:  {
        'md': '17px'
      },
      zIndex:      {
        'header':  300,
        'sidenav': 250
      },
      boxShadow:   {
        'nav': '5px 0 40px #000000'
      },
      maxWidth:    {
        '50p': '50%',
        '70p': '70%',
        ...commonSizes
      },
      minWidth:    {
        ...commonSizes
      },
      minHeight:   {
        ...commonSizes
      },
      borderWidth: {
        DEFAULT: '1px',
        '0':     '0',
        'px':    '1px',
        'xs':    '2px',
        'sm':    '3px',
        'md':    '4px'
      },
      fontFamily:  {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  corePlugins: {
    preflight: true
  },
  plugins:     [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
};