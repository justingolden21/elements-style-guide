import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
	{
		path: "/",
		title: "Elements Style Guide",
		content: pageLoader(() => import("./WELCOME.md"))
	},
	{
		title: "Design",
		path: "/design",
		pages: [
			{
				path: "/logo",
				title: "Logo",
				content: pageLoader(() => import("./logo.md"))
			},
			{
				path: "/construction",
				title: "Construction",
				content: pageLoader(() => import("./construction.md"))
			},
			{
				path: "/colors",
				title: "Colors",
				content: pageLoader(() => import("./colors.md"))
			},
			{
				path: "/typography",
				title: "Typography",
				content: pageLoader(() => import("./typography.md"))
			},
			{
				path: "/fundamentals",
				title: "Fundamentals",
				content: pageLoader(() => import("./fundamentals.md"))
			}
		]
	}
];

// https://docs.catalog.style/configuration/theming
// https://github.com/interactivethings/catalog/blob/master/src/DefaultTheme.js
ReactDOM.render(
	<Catalog
		title="Elements"
		pages={pages}
		logoSrc={"logo.svg"}
		theme={
      {
				background: "#fff",
				textColor: "#000",
				codeColor: "#0f0",
				linkColor: "#f26522",

				lightColor: "#d1d3d4",

				pageHeadingBackground: "#000",
				pageHeadingTextColor: "#fff",

				navBarBackground: "#000",
				navBarTextColor: "#fff",

				brandColor: "#58595b",

				sidebarColor: "#000",
				sidebarColorText: "#fff",
				sidebarColorTextActive: "#f7941d",
				sidebarColorLine: "#fff",
				sidebarColorHeading: "#fff",

				bgLight: "#fff",
				bgDark: "#000",

				fontFamily: "'Open Sans', sans-serif",
				fontHeading: "'Arvo', serif",
				fontMono: "'Roboto Mono', monospace",
      }
    }
	/>,
	document.getElementById("catalog")
);
