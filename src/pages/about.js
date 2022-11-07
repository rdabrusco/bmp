import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle='About Boca Medical Practice'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum repellendus maiores iure eveniet architecto itaque aliquid doloremque, rem expedita, omnis odit autem sunt consequatur illum ducimus, eligendi beatae modi provident quidem unde tempore! Saepe vitae eos magnam, animi, quisquam quibusdam iusto voluptates, cum sint recusandae laudantium aut iste vero!</p>
            </Layout>
            
        </main>
    )
}

export const Head = () => <Seo title='About Us'/>


export default AboutPage
