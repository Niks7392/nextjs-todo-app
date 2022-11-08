import '../styles/globals.css'
import Header from './Header'
function RootLayout({children}) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Todo-app</title>
    </head>
    <body>
      <Header/>
      {children}
    </body>
    </html>
  )
}
export default RootLayout