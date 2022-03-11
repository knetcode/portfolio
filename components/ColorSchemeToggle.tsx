import React, { useState, useEffect } from "react"
import { Switch, useMantineTheme } from "@mantine/core"
import { useDispatch } from "react-redux"
import { setColorScheme } from "../redux/actions/appActions"

const ColorSchemeToggle = () => {
	const theme = useMantineTheme()
	const dispatch = useDispatch()

	const [input, setInput] = useState(false)

	useEffect(() => {
		if (input) {
			dispatch(setColorScheme("dark"))
		} else {
			dispatch(setColorScheme("light"))
		}
	}, [input, dispatch])
	return (
		<Switch
			// label="Theme"
			onLabel="Dark"
			offLabel="Light"
			checked={input}
			onChange={(event) => setInput(event.currentTarget.checked)}
			size="xl"
			styles={{
				input: {
					width: 85,
					backgroundColor: theme.primaryColor,
					":checked::before": {
						transform: `translateX(50px)`,
					},
					"::after": {
						transform: `translateX(-15%)`,
						color: "white",
						fontWeight: "bold",
					},
					":checked::after": {
						transform: `translateX(-135%)`,
					},
				},
				label: {
					color: theme.primaryColor,
				},
			}}
		/>
	)
}

export default ColorSchemeToggle
