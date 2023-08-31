
### Construction

The cardback can be seen below on a 0.125in grid.

```image
plain: true
span: 2
src: "cardback_construction.png"
```

The mark is constructed by taking an ellipse of dimension 2.25in x 0.75in oriented vertically, and copying it at angles 120 and 240 degrees in the typical "atom" structure. Then six lines are drawn parallel to the long side of the ellipse such that they intersect the outter intersections of the ellipse. At the ends of those lines (as seen above), three circles of size 0.125in are drawn. The center circle is 1in by 1in.

### Fire Path

The fire icon is defined by the SVG path:

`M32.7 4.3c2.1.4 11.8 6.4 13.6 26.5 1.5-.4 3.7-4.9 1.6-11.4 2.7 2.8 11.8 13.6 3.6 23.5.2.7 2.4 1.7 3.7-.8-1.1 32.6-51.2 20.6-37.2-9.6 5.9-11.1 17.3-4 14.7-28.2z`

```image
plain: true
span: 2
src: "fire_path.png"
```

### Stroke

All strokes should be 2.25pt (1/32in) (18pt is 0.25in at 72ppi) at logo sizes of 2in. In other words, stroke widths should scale such that they are 1/64 of the width of the mark (without padding). This also compliments the size of the characters in Arvo at regular weight.

### Spacing

The atom mark and wordmark should both be spaced by at least 0.125in as specified in [logo](logo). On the cardback, the border is also drawn 0.125in from the outside, and the atom mark is spaced vertically by 0.25in from the border and the wordmark.

### Grid

Elements uses a 0.125in (1/8in) grid. Every unit should be in integer multiples (or halves) of this size.
