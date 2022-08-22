/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/menu/layout'
import styles from '../styles/Home.module.scss'
import {firstSection} from '../Data/homeData'
import Link from 'next/link'


export default function Home() {
  return (
    <Layout>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <section className={`container-xxl position-relative p-5`}>
      { firstSection.map(({id, title ,height, width, style, subtitle,description, img, }) =>(
        <div key={id} className={`row ${styles.homeRow}`}>
        <div  className="col-12 col-md centerbox">
        <h6>{subtitle}</h6>
        <h1 className='order-sm-0'>{title} {''}</h1>
        <p className="bigFont">{description}</p>
          <button type='button' className='btn '>
          <Link href={'/'} className=''>
            Lees meer
          </Link>
          </button>
        </div>
        <div className={`col-12 col-md  ${style}`}> {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img src="/doodle2.svg" alt=""/>
          <div className='img-wrapper'>
          <Image className="img-fluid " priority src={img} height={height} width={width} alt={''} objectFit={'contain'} />
          </div>
        </div>  
        </div>
      ))}
      <img src="/doodle.svg" alt="" className={styles.doodle2}/> 
      <div className="line-wrap">
        <div className="line"></div>
      </div>
      </section>
      <section>
        <h2>Being healthy finally made simple</h2>
        <article>
          <img src="" alt=""/>
          <h5></h5>
          <p className="bigFont">{}</p>
        </article>
      </section>
    </Layout>
  )
}
