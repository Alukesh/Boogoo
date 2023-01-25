import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Head from 'next/head'



export const getServerSideProps = async ({locale}) => {
    
    const req = await fetch(`http://127.0.0.1:8000/${locale }/api/v1/about_us/`)
    const res = await req.json()
    const reqEmploy = await fetch(`http://127.0.0.1:8000/${locale}/api/v1/employees/`)
    const resEmploy = await reqEmploy.json()

    if (!res) {
        return {
            notFound: true
        }
    }
    return {
        props: { about: res.data[0], employees: resEmploy.data,  messages: require(`../lang/${locale}.json`) }
    }
}


const aboutUs = ({about, employees}) => {
    console.log(about, employees)
    return (
        <>
         <Head>
            <title> Boogoo || О нас</title>
        </Head>
        <div className=''>
            <section id="scroll" className="story container">
                <div className="container"></div>
                <div className="main__story-row">
                    <h2 className="main__story-title">OUR STORY</h2>
                    <div className="main__story-box">
                        <div className="main__story-info">
                            <div  className="main__story-textabove">{about?.title}</div>
                                {/* <p className="main__story-textbelow">{about?.description}</p> */}
                                <p className="main__story-textbelow">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit
                                    amet,
                                    consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    magna
                                    aliquam erat.
                                </p>
                            </div>
                            <div className="main__story-blocks">
                                <div className="main__story-block main__story-block1">WE <br/> PLAN</div>
                                <div className="main__story-block main__story-block2">WE MANAGE</div>
                                <div className="main__story-block main__story-block3">WE <br/> BUILD</div>
                            </div>
                        </div>

                    </div>
                
            </section>

            <section className='employee__bg'>
                <div className='container employee__block'>
                <h2 className="main__story-title red">OUR EMPLOYEES</h2>
                <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={10}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={3}
                    >
                        {
                            employees?.map(u => (
                                <SwiperSlide>
                                    <div className='employee'>
                                        <div className='employee__image'>
                                            <Image loader={() => u.image || '/nouser.webp'} src={ u.image || '/nouser.webp'} fill alt='no employee image'/>
                                        </div>
                                        <div className='employee__info'>
                                            <h3>{u.surname} {u.first_name} {u.patronymic}</h3>
                                            <p>{u.email}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                    {/* {
                        employees?.map(u => (
                            <div className='employee'>
                                <div className='employee__image'>
                                    <Image loader={() => u.image || '/nouser.webp'} src={ u.image || '/nouser.webp'} fill alt='no employee image'/>
                                </div>
                                <div className='employee__info'>
                                    <h3>{u.surname} {u.first_name} {u.patronymic}</h3>
                                    <p>{u.email}</p>
                                </div>
                            </div>
                        ))
                    } */}
                    

                </div>
            </section>
        </div>
        </>
    );
};

export default aboutUs;