export const theme: Theme = {
  colors: {
    white: "white",
    black: "black",
    orange: "orange",
    blueGray: "rgba(202,207,221,1)",
    grenade: "rgba(15,24,39,1)",
    green: "rgba(47,131,78,1)",
    red: "rgba(197,27,41,1)",
    pink: "rgba(202,166,166,1)",
    blue: "rgba(78,142,211,1 )",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    mediumXl: "18px",
    large: "20px",
    largeM: "24px",
    largeXl: "32px",
  },
  gradients: {},

  devices: {
    medium: `min-width: 640px`,
    large: `min-width: 1000px`,
    veryLarge: "min-width: 2500px",
  },
  fontFamily: {
    inter: "Inter",
    roboto: "Roboto",
  },
};

export type Theme = {
  colors: {
    white: string;
    black: string;
    orange: string;
    blueGray: string;
    grenade: string;
    green: string;
    red: string;
    pink: string;
    blue: string;
  };
  gradients: {};
  fontSizes: {
    small: string;
    medium: string;
    mediumXl: string;
    large: string;
    largeM: string;
    largeXl: string;
  };

  devices: {
    medium: string;
    large: string;
    veryLarge: string;
  };
  fontFamily: {
    inter: string;
    roboto: string;
  };
};

export type StyledTheme = {
  theme: Theme;
};
