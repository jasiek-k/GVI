const AVAILABLE_LANGS = {
  pl: "pl",
  en: "en",
};

const DEFAULT_LANG = "pl";

const MENU_TOGGLE_TIMEOUT = 250;

const LANDING_TRANSITION_TIME = 4000;

const BREAKPOINTS = {
  desktop: 1024,
  mobile: 600,
};

const DEFAULT_SCREEN_WIDTHS = {
  mobile: 375,
  tablet: 768,
  desktop: 1920,
};

const DEFAULT_LOGO_CONFIG = {
  mobile: 295,
  tablet: 223,
  dekstop: 366,
};

const MAX_VERT_ROADS = 17;
const MIN_VERT_ROADS = 9;
const MAX_HORI_ROADS = 4;
const MIN_HORI_ROADS = 2;
const MAX_OBLI_ROADS = 4;
const ROADS_GRID = {
  vertical: [
    [0, 1],
    [2, 3, 4],
    [5, 6],
    [7, 8, 9],
    [10, 11],
    [12, 13, 14],
    [15, 16],
    [0, 1],
    [2, 3, 4],
    [5, 6],
    [7, 8, 9],
    [10, 11],
    [12, 13, 14],
    [15, 16],
  ],
  horizontal: [
    [0, 1],
    [2, 3],
  ],
};

export {
  BREAKPOINTS,
  AVAILABLE_LANGS,
  DEFAULT_LANG,
  MENU_TOGGLE_TIMEOUT,
  LANDING_TRANSITION_TIME,
  DEFAULT_SCREEN_WIDTHS,
  DEFAULT_LOGO_CONFIG,
  MAX_VERT_ROADS,
  MIN_VERT_ROADS,
  MAX_HORI_ROADS,
  MIN_HORI_ROADS,
  MAX_OBLI_ROADS,
  ROADS_GRID,
};
