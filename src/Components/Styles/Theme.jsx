const calcRem = (size) => `${size / 10}rem`;

const width = {
    auto: "auto",
    lg: "100%",
};

const fontSizes = {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    // xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(34),
    titleSize: calcRem(50),
};

const fontWeights = {
    thin: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
};

const margins = {
    default: 0,
    small: calcRem(4),
    // base: calcRem(10),
    // lg: calcRem(12),
    xl: calcRem(20),
    xxl: calcRem(30),
};

const paddings = {
    default: 0,
    // small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(24),
    xxl: calcRem(32),
    xxxl: calcRem(48),
    multiple: `${calcRem(24)} ${calcRem(24)} ${calcRem(36)} ${calcRem(48)}`,
};

const deviceSizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "530px",
    tablet: "768px",
    tabletL: "1024px",
};

const colors = {
    // white
    white: "#ffffff",
    white_lighten: "#f8f9fa",
    white_darken: "#e9ecef",

    // gray
    gray: "#767676",
    gray_lighten: "#ced4da",
    gray_darken: "#343a40",

    // blue
    blue: "#506ad4",
    blue_lighten: "#6d80ce",

    // red
    red: "#ff6b6b",
    red_lighten: "#ff8787",

    // bg_color
    bg_color: "#ebecf0",

    // input
    input_color: "#dee2e6",
};

const shadows = {
    black: "0 0 8px 0 rgba(0, 0, 0, 0.04)",
};

const device = {
    mobileS: `media all and (max-width: ${deviceSizes.mobileS})`,
    mobileM: `media all and (max-width: ${deviceSizes.mobileM})`,
    mobileL: `media all and (max-width: ${deviceSizes.mobileL})`,
    tablet: `media all and (max-width: ${deviceSizes.tablet})`,
    tabletL: `media all and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
    width,
    fontSizes,
    fontWeights,
    margins,
    paddings,
    deviceSizes,
    colors,
    shadows,
    device,
};

export default theme;
