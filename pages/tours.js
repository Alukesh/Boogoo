import { Carousel } from 'antd'
import clock from '../public/clock.png';
import bish from '../public/bish.png'
import  Image  from 'next/image';
import {useParams, useRouter} from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {  Modal } from 'antd';
import axios from 'axios';




const  TourPage = () =>{
    const router = useRouter(),
     {id, comment} = router.query,
     [isModalOpen, setIsModalOpen] = useState(false);


     const [tours, setTours] = useState()
     const [tourForm, setTourForm] = useState({
       sender: 'ass' , 
       email: 'jss@mail.ru',
       phone_number: '+99677712787',
       text: 'test',
     })
     const [pageInfo, setPageInfo] = useState({})
     const fetchTour = async () => {
        const req = await fetch(`http://127.0.0.1:8000/ru/api/v1/tours/${id}/`)
        const res = await req.json()
         setPageInfo(res.data)
         console.log(res.data);
    }
    const fetchdata = async () => {
        const req = await fetch('http://127.0.0.1:8000/ru/api/v1/tours/?is_draft=false')
        const res = await req.json()
        setTours(res.data)
        console.log(res.data);
    }
     useEffect(() => {
        fetchdata(); fetchTour()
     },[id])

    
     const submitHandler = async () =>{
          await axios.post('http://127.0.0.1:8000/ru/api/v1/messages/', tourForm)
        .then(res => console.log(res))
        .catch(err => console.log(err))
     }

     useEffect(() => {
        console.log(tourForm);
     },[tourForm])



     
     const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    
     const bgImage = pageInfo?.image
    return (
        <div>
            <Modal centered title={pageInfo?.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                <form className='tours__form' onSubmit={(e) => e.preventDefault()}>
                    <div className='tours__modal_inputs'>
                    <input type="text" onChange={(e) => setTourForm({...tourForm, sender:  e.target.value}) }  placeholder='Имя'/>
                <input type="email" onChange={(e) => setTourForm({...tourForm, email: e.target.value}) } placeholder='эл. почта'/>
                <input type="text" onChange={(e) => setTourForm( {...tourForm, phone_number: e.target.value}) }  placeholder='Номер телефона'/>
                <textarea type="text" onChange={(e) => setTourForm( {...tourForm, text: e.target.value}) } placeholder='Комментарий'/>
                    </div>
                    <button className='tours__modal_button' onClick={() => submitHandler()}>Подтвердить</button>
                </form>
            </Modal>
             <div className="tour__slider">
                <Carousel autoPlaySpeed={8000} autoplay  dotPosition={'right'} easing  >
                    <div className='tour__banner'>
                        <Image loader={() => bgImage}  src={bgImage} fill alt="yui" style={{ objectFit:'cover'}} priority />
                    </div>
                    {
                        pageInfo?.images?.map(i => (
                            <div className='tour__banner'>
                                <Image loader={() => i.image} src={i.image} fill alt="yui" style={{ objectFit:'cover'}} priority />
                            </div>
                        ))
                    }
                 
                </Carousel>
                    <div className="tour__position">
                        <div className="afisha">
                            <p className="text">{pageInfo?.name} </p>
                            <p id="line"></p>
                            <p className="text2">asas</p>
                            <button onClick={showModal} className="tour__position-btn">Оставить заявку</button>
                        </div>
                    </div>
            </div>
           
            <div className='container'>
                <div className='tour__info'>
                    <h1>TOUR PAGE {id} {pageInfo?.name}</h1>
                    <div className='tour__top'>
                        <div>
                            <h4>{pageInfo?.category}</h4>
                            <p>длительность</p>
                            <p>{pageInfo?.days + 'дней'} </p>
                        </div>
                    </div>
                </div>

                <h4 className='tour__description'>
                    {pageInfo?.description}
                </h4>
                



                <div className="prc card-blur"> 
                
                {
                    tours?.map(t => {
                        const src = t.image
                        return pageInfo?.id !== t.id ? (
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
                                    <Image width={20} className="card__icon" src={clock} alt="time"/>
                                    <span>{t.days} days</span>
                                </span>
                            </div>
                    </Link>
                    ) : ''})
                }
                     <Link href={{ pathname: '/tours',  query: { id: 1, comment: 'asdsa'},
                     }} className=" card">
                        <Image width={300} src={bish} alt="bish"/>
                        <span  className="card__icon card__inf" data-title="Пн - Чр">
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
                    </Link>
                    
    
                </div>
            </div>  
        </div>
    )
}


export default TourPage;