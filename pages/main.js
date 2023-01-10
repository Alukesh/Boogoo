import  Image  from 'next/image';
import { Carousel } from 'antd'
import React, { useEffect, useState, useRef } from "react";
import clock from '../public/clock.png';
import slider1 from '../public/slider1.png'
import slider2 from '../public/slidernew.webp'
import bish from '../public/bish.png'
import nomad from '../public/nomad.jpg'
import isyklake from '../public/isyklake.jpg'
import Link from 'next/link';


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

    useEffect(() => {
        // videoBG.current.play()
    }, [])
        const [tours, setTours] = useState()
    useEffect(()=>{
        const fetchdata = async () => {
            const req = await fetch('http://127.0.0.1:8000/ru/api/v1/tours/?is_draft=false')
            const res = await req.json()
            setTours(res.data)
            console.log(res.data);
        }
        fetchdata()
    },[])
    

    const videoBg = '/ktour.mp4'

    return(
        <>

        <div className='home__banner'>
            <video src={videoBg}  autoPlay loop muted  playsInline style={{zIndex:'-1', width: '100%'}}/>
            <form onSubmit={(e) => e.preventDefault()} className='home__form' >
                <input className='home__form-input' type="text" placeholder="City, place" />
                <input className='home__form-input' type="text" />
                <input className='home__form-input' type="text"  placeholder="3"/>
                <button className='home__form-btn' >Search</button>
            </form>
        </div>
        
        

        {/* <section className='banner'>
            <div id="banner">
                <Carousel autoplay='6.6'  dotPosition={'right'} easing >
                    <div className='home_slider1'>
                        <Image className='slideimg1' src={slider1} alt='asa' unoptimized style={{width:'100%', height: '700px'}} />
                    </div>
                    <div className={'home_slider1'}>
                        <Image className={'slideimg1'} src={slider2} alt='asa' unoptimized style={{width:'100%', height: '700px'}} />
                    </div>
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
        </section> */}
       


        <section className=" sectionservice works">
            <h2 className="section_title">Наш прайс</h2>

        </section>
        <div className="container">
            
         
            <div className="prc card-blur"> 
                
            {
                tours?.map(t => {
                    const src = t.image
                    return (
                    <Link href={{ pathname: '/tours',  query: { id: t.id, comment: 'asdsa'},
                    }} key={t?.id} className=" card">
                        <Image width={300} height={400} loader={() => src} src={src} alt="bish"/>
                        <span  className="card__icon card__inf" data-title="Написать фитбек">
                            <img className="card__icon" src="https://img.icons8.com/ios/50/null/information--v1.png"/>
                        </span>
                        <div className="card__bg"> </div>
                        <h3 className="card__title">{t.name}</h3>
                        <p className="card__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repellat.</p>
                        <div className="card__bot">
                            <span className="pricetext2">1990 сом</span>
                            <span className="card__time">
                                <Image width={15} className="card__icon" src={clock} alt="time"/>
                                <span>{t.days} days</span>
                            </span>
                        </div>
                </Link>
                )})
            }
            {
                tours?.map(t => {
                    const src = t.image
                    return (
                    <Link href={{ pathname: '/tours',  query: { id: t.id, comment: 'asdsa'},
                    }} key={t?.id} className=" card">
                        <Image width={300} height={400} loader={() => src} src={src} alt="bish"/>
                        <span  className="card__icon card__inf" data-title="Написать фитбек">
                            <img className="card__icon" src="https://img.icons8.com/ios/50/null/information--v1.png"/>
                        </span>
                        <div className="card__bg"> </div>
                        <h3 className="card__title">{t.name}</h3>
                        <p className="card__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repellat.</p>
                        <div className="card__bot">
                            <span className="pricetext2">1990 сом</span>
                            <span className="card__time">
                                <Image width={15} className="card__icon" src={clock} alt="time"/>
                                <span>{t.days} days</span>
                            </span>
                        </div>
                </Link>
                )})
            }
                
                
                

                

            </div>
            <button className="downprice">Все туры</button>
        </div>

      

        <div className='home__parallax'>
            
        </div>

        <section className="sectionservice">
            <h2 className="section_title ">Почему у нас</h2>
            <div className="container">
                <div className="group">
                    <div className="group1">
                        {/* <imgName class="group__img" src="./img/Group1.png" alt=""> */}
                        <p className="ptext1">Туризм по духу</p>
                        <p className="ptext2">Хотите узнать подробность, телефон для связи:</p>
                        <p className="ptext3">+996 (0553) 577-575</p>
                    </div>


                    <div className="group2">
                        {/* <imgName class="group__img" src="./img/Group2.png" alt=""> */}
                        <p className="ptext1">Доступные предложения по цене</p>
                        <p className="ptext2">Хотите узнать подробность, телефон для связи:</p>
                        <p className="ptext3">+996 (0553) 577-575</p>
                    </div>

                    <div className="group3">
                        {/* <imgName class="group__img" src="./img/Group3.png" alt=""> */}
                        <p className="ptext1">Отдых без напряжения</p>
                        <p className="ptext2">Хотите узнать подробность, телефон для связи:</p>
                        <p className="ptext3">+996 (0553) 577-575</p>
                    </div>

                    <div className="group4">
                        {/* <imgName class="group__img" src="./img/Group4.png" alt=""> */}
                        <p className="evenly">Оправданное доверие наших клиентов</p>
                        <p className="ptext2">Хотите узнать подробность, телефон для связи:</p>
                        <p className="ptext3">+996 (0553) 577-575</p>
                    </div>
                </div>

            </div>
        </section>


        <section className=" sectionservice works">
            <h2 className="section_title">Articles & Tips</h2>
             <p style={{textAlign: 'center'}}>Explore some of the best tips from around the Kyrgyzstan</p> 
            <div className="container">
                <div className="prc card-blur">
                    <div className=" 'price1' card">
                    <Image width={780} src={bish} alt="bish"/>
                        <div className="card__bg"> </div>
                        <div className="ptext1">The best one-day hikes near Bishkek</div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repellat.</p>
                        <p className="pricetext2">Читать больше</p>
                    </div>
    
                    <div className="card price3">
                    <Image width={780} src={isyklake} alt="isyklake"/>
                        <div className="card__bg"> </div>
                        <div className="ptext1">Why you should choose Kyrgyzstan for your next vacation</div>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p className="pricetext2">Читать больше</p>
                    </div>
                    <div className=" price2 card">
                    <Image width={780} src={nomad} alt="bish"/>
                        <div className="card__bg"> </div>
                        <div className="ptext1">A guide to Kyrgyz nomad games</div>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p className="pricetext2">Читать больше</p>
                    </div>
    
                </div>
                 <button className="downprice">Галерея</button> 
            </div>
        </section>

      

        </>
    )
}

Main.getInitialProps = async ()=>{
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await req.json()


    return {users: users}

 }




 export default Main;



