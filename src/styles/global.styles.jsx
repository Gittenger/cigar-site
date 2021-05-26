import { createGlobalStyle } from 'styled-components'

import fontFaces from './typography/fontFaces'
import resetCSS from './css/resetCSS.js'

const GlobalStyles = createGlobalStyle`
${fontFaces}
${resetCSS}

body {
	${({ theme: { css } }) => css.flexCenterCol};
    justify-content: flex-start;
    font-size: 1.8rem;
    min-height: 1000px;
 
    background-color: ${({ theme: { colors } }) => colors.primary};
    color:  ${({ theme: { colors } }) => colors.secondary};

    transition: background-color .3s, color .3s;
}

#root {
	${({ theme: { css } }) => css.flexCenterCol};
    
    /* set font vars in root */
    ${({ theme: { typography } }) => typography.fontVars.fontMain};

    /* set shared typography styles */
    ${({ theme: { typography } }) => typography.sharedStyles};

    width: 100%;
}
`

export default GlobalStyles
