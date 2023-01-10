import Image from 'next/image';
import React from 'react';
import blogImg1 from '../public/bish.png'
import blogImg2 from '../public/isyklake.jpg'
import blogImg3 from '../public/nomad.jpg'


const Blog = () => {
    const videoBg = './ktour.mp4'

    return (
        <div>
            <section>
                <video src={videoBg} autoPlay muted loop playsInline style={{ zIndex: '-1', width: '100%', height: '100vh', objectFit: 'cover'}}/>
            </section>
            <section className=" sectionservice works">
            <h2 className="section_title">Articles & Tips</h2>
            <p style={{textAlign: 'center'}}>Explore some of the best tips from around the Kyrgyzstan</p> 
            <div className="container">
                <div className="prc card-blur">
                    <div className=" card">
                            <Image src={blogImg1} alt="asf" width={1920} height={1080} />
                        <div className="card__bg"> </div>
                        <div className="ptext1">The best one-day hikes near Bishkek</div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repellat.</p>
                        <p className="pricetext2">Читать больше</p>
                    </div>
                    <div className="card price3">
                        <Image src={blogImg2} alt="asagag" width={1920} height={1080}/>
                        <div className="card__bg"> </div>
                        <div className="ptext1">Why you should choose Kyrgyzstan for your next vacation</div>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p className="pricetext2">Читать больше</p>
                    </div>
                    <div className=" price2 card">
                        <Image src={blogImg3} alt="yandex metric" width={1920} height={1080}/>
                        <div className="card__bg"> </div>
                        <div className="ptext1">A guide to Kyrgyz nomad games</div>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p className="pricetext2">Читать больше</p>
                    </div>
                </div>
                 <button className="downprice">Посмотреть Туры</button>
            </div>
        </section>
        </div>
    );
};

export default Blog;