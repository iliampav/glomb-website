import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
    render() {
        return ( 
            <Html lang="pt">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com/" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" /> 
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        ) 
    } 
}