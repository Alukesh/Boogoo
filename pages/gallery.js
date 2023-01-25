import Image from 'next/image';
import Link from 'next/link';
import blogImg1 from '../public/bish.png'
import blogImg2 from '../public/isyklake.jpg'
import blogImg3 from '../public/nomad.jpg'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'



export const getServerSideProps = async (context) => {
    const {locale, query} = context;
    const req = await fetch(`http://127.0.0.1:8000/${locale }/api/v1/places/?tags__name=${query.tag || ''}`)
    const res = await req.json()
    // setTours(res.data)

    if (!res) {
        return {
            notFound: true
        }
    }
    return {
        props: { tours: res.data, messages: require(`../lang/${locale}.json`) }
    }
}


const Blog = ({tours}) => {
  


    
    
    
    const [search, setSearch] = useState('')
    const [oneDay, setOneDay] = useState('')

    const onCategoryChange = (value) => {
        console.log(`selected ${value}`);
    };

    const videoBg = '/ktour.mp4'

    return (
        <>
         <Head>
            <title> Boogoo || Галерея</title>
        </Head>
        <div>
            <section>
                <video src={videoBg} autoPlay muted loop playsInline style={{ zIndex: '-1', width: '100%', height: '70vh', objectFit: 'cover'}}/>
            </section>
            <section className=" sectionservice works">
           
            <h2 className="section_title">Articles & Tips</h2>
            <p style={{textAlign: 'center'}}>Explore some of the best tips from around the Kyrgyzstan</p> 
            
            <div className="container">
                <div className="prc card-blur">
                    <Link className="card price3" href={{ pathname: '/place',  query: { id:' t.id', comment: 'asdsa'},}} >
                            <Image src={blogImg1} alt="asf" width={1920} height={380} />
                        <div className="card__bg"> </div>
                        <div className="ptext1">The best one-day hikes near Bishkek</div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repellat.</p>
                        <p className="pricetext2">Читать больше</p>
                    </Link>
                    {
                        tours?.map( ( t, idx) => (
                            <Link key={idx} href={{ pathname: '/place',  query: { id: t.id, comment: 'asdsa'},}} className={"card price3"}>
                                <Image loader={() => t.image} src={t.image} alt="asf" width={1920} height={380} />
                                <div className="card__bg"> </div>
                                <div className="ptext1">{t.name}</div>
                                <p className="">{t.description?.slice(0,121)}</p>
                                <p className="pricetext2">Читать больше</p>
                            </Link>
                        ))
                    }
                    <div className="card price3">
                        <Image src={blogImg2} alt="asagag" width={1920} height={380}/>
                        <div className="card__bg"> </div>
                        <div className="ptext1">Why you should choose Kyrgyzstan for your next vacation</div>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p className="pricetext2">Читать больше</p>
                    </div>
                    <div className=" price2 card">
                        <Image src={blogImg3} alt="yandex metric" width={1920} height={380}/>
                        <div className="card__bg"> </div>
                        <div className="ptext1">A guide to Kyrgyz nomad games</div>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p className="pricetext2">Читать больше</p>
                    </div>
                </div>
                 
            </div>
        </section> <br/><br/>
        </div>
        </>
    );
};

export default Blog;