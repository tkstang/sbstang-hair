import Typography from "typography";

const typography = new Typography({
  baseFontSize: "13px",
  bodyFontFamily: ["PT Sans Narrow"],
  googleFonts: [
    {
      name: 'PT Sans Narrow',
      styles: [
        '300',
        '400',
        '500',
        '700',
      ],
    },
  ],
});

export default typography;
