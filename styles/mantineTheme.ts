import { MantineThemeOverride } from "@mantine/core"

const MantineTheme: MantineThemeOverride = {
	colorScheme: "dark",
	defaultRadius: "sm",
	fontFamily: "'Nunito Sans', sans-serif",
	fontFamilyMonospace: "'Fira Mono', monospace;",
	focusRing: "auto",
	white: "#ffffff",
	black: "#333333",
	colors: {
		muted: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717"],
		danger: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d"],
		error: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337"],
		success: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b"],
		warning: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f"],
		darkturquoise: ["#00ced1", "#00ced1", "#00ced1", "#00ced1", "#00ced1", "#00ced1", "#00ced1", "#00ced1", "#00ced1", "#00ced1"],
		fuchsia: ["#c026d3", "#c026d3", "#c026d3", "#c026d3", "#c026d3", "#c026d3", "#c026d3", "#c026d3", "#c026d3", "#c026d3"],
	},
	primaryColor: "fuchsia",
}

export default MantineTheme
