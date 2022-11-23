export const theme: Theme = {
  colors: {
    white: "white",
    black: "black",
    orange: "orange",
    blueGray: "rgba(202,207,221,1)",
    grenade: "rgba(15,24,39,1)",
    green: "rgba(47,131,78,1)",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
  },
  gradients: {},

  devices: {
    medium: `min-width: 640px`,
    large: `min-width: 1000px`,
    veryLarge: "min-width: 2500px",
  },
  fontFamily: {
    inter: "Inter",
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
  };
  gradients: {};
  fontSizes: {
    small: string;
    medium: string;
  };

  devices: {
    medium: string;
    large: string;
    veryLarge: string;
  };
  fontFamily: {
    inter: string;
  };
};

export type StyledTheme = {
  theme: Theme;
};
