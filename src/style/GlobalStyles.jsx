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
        font-family: 'Montserrat', sans-serif;
        background-color: #302C42;
        /* @media screen and (max-width: 1080px) {
            overflow-y: ${(props) => (props.toggle ? 'hidden' : '')};
        } */
    }
    main{
        display: flex;
        flex-direction: column;
        gap: 6rem;
        padding: 0 6rem;
        /* @media screen and (max-width: 1280px) {
            padding: 0 3rem;
        }
        @media screen and (max-width: 1080px) {
            padding: 0 1.5rem;
            filter: ${(props) =>
              props.toggle ? 'blur(5px) brightness(0.7)' : 'none'};
            pointer-events: ${(props) => (props.show ? 'none' : '')};
            user-select: ${(props) => (props.show ? 'none' : '')};
            overflow-x: hidden;
            overflow-y: hidden;
        }
        @media screen and (max-width: 480px) {
            padding: 0 1rem;
        } */
    }
    input, textarea{
        font-family: 'Montserrat', sans-serif;
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
        color: #e3e3e3;
    }
    ul{
        list-style: none;
    }
    p{
        color: white;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        font-family: 'Montserrat', sans-serif;
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
        background-color: #8176AF;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`
export default GlobalStyles
