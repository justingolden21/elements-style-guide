### Elements Color Palette

```color
span: 3
name: Deep Black
value: "#231f20"
```

```color
span: 2
name: Pure White
value: "#ffffff"
```

```color
span: 1
name: Fire Red
value: "#ed1b31"
```

Pure Black (#000000) should be used for screens (when not representing what the product will look like in print).

### Elements

```color-palette
colors:
  - {name: "Fire", value: "#ed1b31"}
  - {name: "Water", value: "#1b449c"}
  - {name: "Gem", value: "#00ad4d"}
  - {name: "Electric", value: "#ffda00"}
  - {name: "Great Spell", value: "#f7941d"}
```


### Greys

```color-palette
colors:
  - {name: "200", value: "#d1d3d4"}
  - {name: "400", value: "#a7a9ac"}
  - {name: "600", value: "#808285"}
  - {name: "800", value: "#58595b"}
```

### Accents

```color-palette
colors:
  - {name: "Lighter", value: "#ffc20e"}
  - {name: "Great Spell", value: "#f7941d"}
  - {name: "Darker", value: "#f26522"}
```

### CMYK

All colors are based in CMYK and designed for print. Here are the appropriate values for print:

black: cmyk(0,0,0,1)
white: cmyk(0,0,0,0)
fire: cmyk(0,1,0.875,0)
water: cmyk(1,0.875,0,0)
gem: cmyk(0.875,0,1,0)
lightning: cmyk(0,0.125,1,0)
great spell: cmyk(0,0.5,1,0)

lighter accent: cmyk(0,0.25,1,0)
darker accent: cmyk(0,0.75,1,0)

greys have 0.2,0.4,0.6,0.8 key

### Other Colors

[TailwindCSS colors](https://tailwindcss.com/docs/customizing-colors) are also acceptable for web use secondarily to the Elements palette. No other colors should be used. Of course, other company's colors should be used when applicable (ie. Kickstarter green, Youtube red) for example, for styling that company's logo in a button. Gradients should be avoided. Shadows and opacity should be used sparingly.