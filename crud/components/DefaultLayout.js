import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

function DefaultLayout(props) {
    return (
        <div>
            <Head>
                <title>Next Crud</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
                {/* CSS */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
            </Head>
            <Header />
            <div className="body">{props.children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout