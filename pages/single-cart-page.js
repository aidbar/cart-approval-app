import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'



export default function SingleCartPage() {
    return (
        <Layout>
            <Head>
                <title>Single Cart Page</title>
            </Head>
            <h1>Single Cart Page</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}