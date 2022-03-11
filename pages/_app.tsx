import React, { useEffect, useState } from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import { GlobalStyles } from "../styles/globalStyles"
import { wrapper } from "../redux/reduxConfig"
import MantineTheme from "../styles/mantineTheme"

type Props = {
	Component: any
	pageProps: any
}

const App = ({ Component, pageProps }: Props) => {
	const colorScheme = useSelector((state: RootStateOrAny) => state.app.colorScheme)

	const [colorSchemeToLoad, setColorSchemeToLoad] = useState(colorScheme)

	useEffect(() => {
		if (typeof window !== "undefined" && localStorage.getItem("colorScheme")) {
			setColorSchemeToLoad(localStorage.getItem("colorScheme"))
		} else {
			setColorSchemeToLoad(colorScheme)
		}
	}, [colorScheme])

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<MantineProvider
				theme={{
					...MantineTheme,
					colorScheme: colorSchemeToLoad,
					primaryColor: colorScheme === "dark" ? "fuchsia" : "darkturquoise",
				}}
			>
				<Component {...pageProps} />
				<style jsx>{GlobalStyles}</style>
			</MantineProvider>
		</>
	)
}

//  Disable static optimization to always server render, making nonce unique on every request
App.getInitialProps = () => ({})

export default wrapper.withRedux(App)
