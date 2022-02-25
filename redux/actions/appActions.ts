export const SET_IS_LOADING = "SET_IS_LOADING"

export const setIsLoading = (loading: boolean, text: string) => ({
    type: SET_IS_LOADING,
    loading,
    text,
})
