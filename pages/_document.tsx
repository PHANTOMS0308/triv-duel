import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src='/darkmode.js'></script>
      </Head>
      <body className='
        bg-slate-100 dark:bg-slate-900
        text-slate-950 dark:text-slate-50
      '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
