import 'ress'
import '../styles/globals.css'
import 'react-calendar/dist/Calendar.css';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import * as theme from 'ui/theme'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'clients'
import { ListDisplayProvider } from 'contexts/ListDisplayProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ListDisplayProvider>
          <Component {...pageProps} />
        </ListDisplayProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
