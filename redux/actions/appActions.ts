export const SET_IS_LOADING = "SET_IS_LOADING"
export const SET_COLOR_SCHEME = "SET_COLOR_SCHEME"
export const SET_IS_NAV_OPEN = "SET_IS_NAV_OPEN"

export const setIsLoading = (isLoading: boolean, loadingText: string) => ({
	type: SET_IS_LOADING,
	isLoading,
	loadingText,
})

export const setColorScheme = (colorScheme: "dark" | "light") => ({
	type: SET_COLOR_SCHEME,
	colorScheme,
})

export const setIsNavOpen = (isNavOpen: boolean) => ({
	type: SET_IS_NAV_OPEN,
	isNavOpen,
})
