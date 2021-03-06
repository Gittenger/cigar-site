import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/theme'
import GlobalStyles from './styles/global.styles.jsx'

import CIndex from './components/components.index.js'
import MainNav from './components/MainNav/MainNav.component'

function App() {
	const [theme, setTheme] = useState('dark')
	const {
		TComp: { P },
		TopNav,
	} = CIndex

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<TopNav />
			<MainNav />
		</ThemeProvider>
	)
}

export default App
