import { AppProps /*, AppContext */ } from 'next/app';
import { Global, css } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Global styles={globalStyle} />
        </>
    )

}

const globalStyle = css`
    html,
    body,
    #root {
    height: 100%;
    }
    html {
        box-sizing: border-box;
        * {
            box-sizing: inherit;
        }
    }
    body{
        margin: 0;
    }
`

export default MyApp