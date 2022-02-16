import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/layout'
import Alert from '../../components/alert'
import Profile from '../../components/profile'


export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <h1>First Post</h1>
        <h2>status<Alert type='error'>!</Alert></h2>
        {/* <h2>Profile</h2> */}
        {/* <Profile></Profile> */}
        
    </Layout>
    )
  }
  