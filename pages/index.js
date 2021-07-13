import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllCartsData } from '../lib/carts'


export default function Home({ allCartsData }) {
    //var apiCallResultAllCartsParsed = JSON.parse(apiCallResultAllCarts)
    console.log(allCartsData)

    var allCarts = [];
    for (var i = 0; i < allCartsData.length; i++) {
        var temp = allCartsData[i];
        allCarts.push(temp[1]);
    }
    console.log(allCarts);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you'll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> 
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allCarts.map(({ id, userId }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {id} {userId}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allCartsData = await getAllCartsData()
    //var apiCallResultAllCarts = JSON.stringify(allCartsData)
    return {
        props: {
            allCartsData
        }
    }
}