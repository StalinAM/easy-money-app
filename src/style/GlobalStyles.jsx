import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        scroll-behavior: smooth;
        line-height: 1.5;
    }
    body{
        overflow-x: hidden;
        width: 100%;
        min-height: 100vh;
        font-family: 'Nunito', sans-serif;
        /* @media screen and (max-width: 1080px) {
            overflow-y: ${(props) => (props.toggle ? 'hidden' : '')};
        } */
    }
    article{
        max-width: 75rem;
        margin: 0 auto;
    }
    input, textarea{
        font-family: 'Nunito', sans-serif;
    }
    input:focus, textarea:focus{
        outline: none;
    }
    img{
        max-width: 100%;
        height: auto;
        display: block;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        font-family: 'Nunito', sans-serif;
        cursor: pointer;
        border: none;
        outline: none;
    }
/* Scrollbar */
    body::-webkit-scrollbar {
        width: 5px;               /* width of the entire scrollbar */
    }
    body::-webkit-scrollbar-track {
        background: none;        /* color of the tracking area */
    }
    body::-webkit-scrollbar-thumb {
        background-color: #14121F;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`
export default GlobalStyles
