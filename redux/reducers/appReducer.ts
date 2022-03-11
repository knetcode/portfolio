import { SET_IS_LOADING, SET_COLOR_SCHEME, SET_IS_NAV_OPEN } from "../actions/appActions"

const initialState = {
	isLoading: false,
	loadingText: "Loading . . .",
	colorScheme: "light",
	isNavOpen: true,
}

const appReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
				loadingText: action.text,
			}

		case SET_COLOR_SCHEME:
			localStorage.setItem("colorScheme", action.colorScheme)
			return {
				...state,
				colorScheme: action.colorScheme,
			}

		case SET_IS_NAV_OPEN:
			localStorage.setItem("isNavOpen", action.payload)
			return {
				...state,
				isNavOpen: action.payload,
			}

		default:
			return state
	}
}

export default appReducer
