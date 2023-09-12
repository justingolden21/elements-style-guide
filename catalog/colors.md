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
value: "#b5191e"
```

Pure Black (#000000) should be used for screens (when not representing what the product will look like in print).

### Elements

```color-palette
colors:
  - {name: "Fire", value: "#b5191e"}
  - {name: "Water", value: "#2a2a86"}
  - {name: "Gem", value: "#00845d"}
  - {name: "Electric", value: "#ffdd00"}
  - {name: "Great Spell", value: "#f7941d"}
```


### Grays

```color-palette
colors:
  - {name: "Gray 20", value: "#d1d3d4"}
  - {name: "Gray 40", value: "#a7a9ac"}
  - {name: "Gray 60", value: "#808285"}
  - {name: "Gray 80", value: "#58595b"}
```

### Accents

```color-palette
colors:
  - {name: "Lighter", value: "#ffcb05"}
  - {name: "Great Spell", value: "#f7941d"}
  - {name: "Darker", value: "#f15a22"}
```

### CMYK

All colors are based in CMYK and designed for print. Here are the appropriate values for print:

```table
span: 3
rows:
  - Name: Black
    CMYK: cmyk(0.2,0.2,0.2,1)
  - Name: White
    CMYK: cmyk(0,0,0,0)
  - Name: Fire
    CMYK: cmyk(0.1,1,1,0.2)
  - Name: Water
    CMYK: cmyk(1,1,0,0.1)
  - Name: Gem
    CMYK: cmyk(1,0.2,0.8,0.1)
  - Name: Electric
    CMYK: cmyk(0,0.1,1,0)
  - Name: Great spell
    CMYK: cmyk(0,0.5,1,0)
  - Name: 
  - Name: Lighter accent
    CMYK: cmyk(0,0.2,1,0)
  - Name: Darker accent
    CMYK: cmyk(0,0.8,1,0)
  - Name: 
  - Name: Gray 20
    CMYK: cmyk(0,0,0,20)
  - Name: Gray 40
    CMYK: cmyk(0,0,0,40)
  - Name: Gray 60
    CMYK: cmyk(0,0,0,60)
  - Name: Gray 80
    CMYK: cmyk(0,0,0,80)
```


### Other Colors

[TailwindCSS colors](https://tailwindcss.com/docs/customizing-colors) are also acceptable for web use secondarily to the Elements palette. No other colors should be used. Of course, other company's colors should be used when applicable (ie. Kickstarter green, Youtube red) for example, for styling that company's logo in a button. Gradients should be avoided. Shadows and opacity should be used sparingly.