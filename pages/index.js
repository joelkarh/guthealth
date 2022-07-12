import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/menu/layout'
import styles from '../styles/Home.module.scss'
import {firstSection} from '../Data/homeData'


export default function Home() {
  return (
    <Layout>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <section className={`container-xxl p-5`}>
       { firstSection.map(({id, title ,height, width, style, subtitle,description, img, }) =>(
        <div key={id} className={`row ${styles.homeRow}`}>
        <div  className="col-12 col-md">
         <h1 className='order-sm-0'>{title} {''}</h1>
         <h2>{subtitle}</h2>
         <p className="bigFont">{description}</p>
        </div>
        <div className={`col-12 col-md   ${style}`}>
           <Image className="img-fluid " priority src={img} height={height} width={width} alt={''} objectFit={'cover'} />
        </div> 
        </div>
       ))}
       
      </section>
      
    </Layout>
  )
}
