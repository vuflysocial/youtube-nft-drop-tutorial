import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThirdwebProvider
            activeChainId={ChainId.binance}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp
