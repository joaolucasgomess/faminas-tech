import { createGlobalStyle } from 'styled-components'
import {colors} from '../constants/colors'


const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 400;
    }
    :root{
        background-color: ${colors.white};
    }
`

export default GlobalStyle