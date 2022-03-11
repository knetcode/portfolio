import css from "styled-jsx/css"
import { Colors } from "./colors"
import { Themes } from "./themes"

export const GlobalStyles = css.global`
	/* RESETS */
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	a,
	li,
	ul,
	ol,
	span,
	p,
	div,
	section,
	main,
	img,
	figure,
	caption,
	button {
		margin: 0;
		padding: 0;
	}

	* {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
		scroll-behavior: smooth;
	}

	body {
		font-family: "Nunito Sans", sans-serif;
	}

	.mono {
		font-family: "Fira Mono", monospace;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: bold;
	}

	p,
	a,
	span,
	button,
	ul,
	ol,
	li {
		font-family: inherit;
	}

	a,
	button {
		text-decoration: none;
		display: block;
		border: none;
		background-color: transparent;
		padding: 0;
		margin: 0;
		font-weight: bold;
		cursor: pointer;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
		background-color: ${Colors.blue[500]};
		color: ${Colors.white};
		height: 50px;
		border-radius: ${Themes.borderRadius};
		font-size: 18px;
		font-weight: normal;
		margin: 20px 0;
		margin-bottom: 50px;
	}

	.link {
		text-decoration: underline;
		color: ${Colors.muted[500]};
		font-weight: normal;
	}

	.react-tabs {
		width: 100%;
	}

	.react-tabs__tab-list {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		border-radius: ${Themes.borderRadius};
		width: 80%;
		margin: 20px auto;
		background-color: ${Colors.muted[300]};
		max-width: 360px;
		list-style-type: none;
	}

	.react-tabs__tab {
		padding: 10px 30px;
		background-color: ${Colors.muted[300]};
		color: ${Colors.muted[600]};
		width: 100%;
		text-align: center;
		cursor: pointer;
		white-space: nowrap;
	}

	.react-tabs__tab-panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.react-tabs__tab:first-of-type {
		border-top-left-radius: ${Themes.borderRadius};
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		border-bottom-left-radius: ${Themes.borderRadius};
	}

	.react-tabs__tab:last-of-type {
		border-top-left-radius: 0px;
		border-top-right-radius: ${Themes.borderRadius};
		border-bottom-right-radius: ${Themes.borderRadius};
		border-bottom-left-radius: 0px;
	}

	.react-tabs__tab--selected {
		background-color: ${Colors.blue[500]};
		color: ${Colors.white};
		font-weight: bold;
	}
`
