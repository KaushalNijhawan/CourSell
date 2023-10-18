import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#eeeeee' }}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  )

}
