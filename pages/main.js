import  Image  from 'next/image';
import { Carousel } from 'antd'
import React, { useEffect, useState, useRef } from "react";
import clock from '../public/clock.png';
import slider1 from '../public/slider1.png'
import slider2 from '../public/slidernew.webp'
import bish from '../public/bish.png'


// export const getServerSideProps = async () => {
//     const req = await fetch('https://jsonplaceholder.typicode.com/users')
//     const res = await req.json()

//     if (!res) {
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props: { users: res }
//     }
// }




const  Main = () => {
    const videoBG = useRef(null)

    useEffect(() => {
        videoBG.current.play()
    }, [])
        const [tours, setTours] = useState()
    useEffect(()=>{
        const fetchdata = async () => {
        const req = await fetch('http://127.0.0.1:8000/ru/api/v1/tours/')
        const res = await req.json()
        setTours(res.data)
        console.log(res.data);
    }
    fetchdata()
    },[])
    

    const videoBg = '/ktour.mp4'

    return(
        <>

        <video src={videoBg} ref={videoBG} autoplay loop muted  playsInline style={{zIndex:'-1', width: '100%'}}/>
        

        <section className='banner'>
            <div id="banner">
                <Carousel autoplay='6.6'  dotPosition={'right'} easing className={'home_carousel'} >
                    <div className='home_slider1'>
                        <Image className='slideimg1' src={slider1} alt='asa' unoptimized style={{width:'100%', height:'700px'}} />
                    </div>
                    <div className={'home_slider1'}>
                        <Image className={'slideimg1'} src={slider2} alt='asa' unoptimized style={{width:'100%', height:'700px'}} />
                    </div>
                    {/*<div className={styles.home_slider1}>
                        <Image className={styles.slideimg1} src={slider3} width={1366} height={700} />
                    </div> */}
                </Carousel>
                    <div className="home__position">
                        <div className="afisha">
                            <p className="text">Туризм в Кыргызстане </p>
                            <p id="line"></p>
                            <p className="text2">asas</p>
                            <button className="button2">Оставить заявку</button>
                        </div>
                    </div>
            </div>
        </section>


        <section className=" sectionservice works">
            <h2 className="section_title">Наш прайс</h2>

        </section>
        <div className="container">
            
         
            <div className="prc card-blur"> 
                
            {
                tours?.map(t => {
                    const src = t.image
                    return (
                    <div key={t?.id} className=" price1 card">
                    <Image width={300} height={400} loader={() => src} src={src} alt="bish"/>
                    <span  className="card__icon card__inf" data-title="Написать фитбек">
                        <img className="card__icon" src="https://img.icons8.com/ios/50/null/information--v1.png"/>
                    </span>
                    <div className="card__bg"> </div>
                    <p className="pricetext1">{t.name}</p>
                    <p className="pricetext1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repellat.</p>
                    <div className="card__bot">
                        <span className="pricetext2">1990 сом</span>
                        <span className="card__time">
                            <Image width={20} className="card__icon" src={clock} alt="time"/>
                            <span>{t.days} days</span>
                        </span>
                    </div>
                </div>
                )})
            }
                 {/* <div className=" price1 card">
                    <Image width={300} src={bish} alt="bish"/>
                    <span  className="card__icon card__inf" data-title="Написать фитбек">
                        <img className="card__icon" src="https://img.icons8.com/ios/50/null/information--v1.png"/>
                    </span>
                    <div className="card__bg"> </div>
                    <p className="pricetext1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repellat.</p>
                    <div className="card__bot">
                        <span className="pricetext2">1990 сом</span>
                        <span className="card__time">
                            <Image width={20} className="card__icon" src={clock} alt="time"/>
                            <span>1 hours</span>
                        </span>
                    </div>
                </div> */}
                
               <div className=" price1 card">
                    <Image width={300} src={bish} alt="bish"/>
                    <span  className="card__icon card__inf" data-title="Написать фитбек">
                        <img className="card__icon" src="https://img.icons8.com/ios/50/null/information--v1.png"/>
                    </span>
                    <div className="card__bg"> </div>
                    <p className="pricetext1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repellat.</p>
                    <div className="card__bot">
                        <span className="pricetext2">1990 сом</span>
                        <span className="card__time">
                            <Image width={20} className="card__icon" src={clock} alt="time"/>
                            <span>1 hours</span>
                        </span>
                    </div>
                </div>
                
                

                

            </div>
            <button className="downprice">Все туры</button>
        </div>

      

        <div className='home__parallax'>
            
        </div>


      

        </>
    )
}

Main.getInitialProps = async ()=>{
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await req.json()


    return {users: users}

 }




 export default Main;



