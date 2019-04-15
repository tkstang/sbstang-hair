import Typography from "typography";

const typography = new Typography({
  baseFontSize: "13px",
  bodyFontFamily: ["Lato"],
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ],
    },
  ],
});

export default typography;
