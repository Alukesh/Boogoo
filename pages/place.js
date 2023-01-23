import React from 'react';
import  Image  from 'next/image';
import { Image as NewImg} from 'antd';
import  Link  from 'next/link';
import nomad from '../public/nomad.jpg'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import Head from 'next/head'

export function getStaticProps({locale}){
  return {
    props: {
      messages: require(`../lang/${locale}.json`)
    }
  }
}


const place = () => {
  const [lorem, setLorem] = useState('aist_lorem1200')
  const [gal, setGal] = useState('aist_gallery_none')
  const [visible, setVisible] = useState(false)
  const viewGallery = () => {
    setLorem('aist_lorem_none')
    setGal('aist_gallery_view')
    console.log(lorem)
  }
  const hideGallery = () => {
    setGal('aist_gallery_none')
    setLorem('aist_lorem1200')
  }
    const router = useRouter(),
    {id, comment} = router.query,
    [pageInfo, setPageInfo] = useState({});


    const fetchTour = async () => {
        const req = await fetch(`http://127.0.0.1:8000/ru/api/v1/places/${id}/`)
        const res = await req.json()
         setPageInfo(res.data)
         console.log(res.data);
    }
     useEffect(() => {
        fetchTour();
     },[id])

     const changeHandler = (key) => {
      console.log(key);
    };
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
     
  
      return (
        <>
         <Head>
            <title> Boogoo || Локации</title>
        </Head>
          <div className='place'>
            <section data-image={pageInfo?.image} style={{background: `url(${pageInfo?.image}) center/cover no-repeat`}} className='aist_back'>
              <div>
                <h1 className='aist_title'>{pageInfo?.name}</h1>
              </div>
            </section>
            <section className='aist_page_back'>
            <div className='aist_main_container'>
            <div className='aist_container'>
            <div className='aist_grid_buttons'>
              <button onClick={()=> hideGallery()}>ITINERARY</button>
              <button>LOCATION</button>
              <button onClick={()=> viewGallery()}>GALLERY</button>
          </div>
              <div className="parent">
              <div className="div1">
             <div className='asit_grid_buttons_borderLine'></div>
             <div className={lorem}>
                  <p>{pageInfo?.description}</p>
             </div>
              <div className={`${gal} place__gall`} >
                <div class="row">
                  <div class="column">
                    {
                      pageInfo?.images?.map(inf =>(
                        <NewImg  src={inf.image} />
                      ))
                    }
                  </div>
                  <div class="column">
                    {
                        pageInfo?.images?.map(inf =>(
                          <NewImg  src={inf.image} />
                        ))
                      }
                  </div>
                  <div class="column">
                    {
                      pageInfo?.images?.map(inf =>(
                        <NewImg  src={inf.image} />
                      ))
                    }
                  </div>
                  <div class="column">
                    {
                      pageInfo?.images?.map(inf =>(
                        <NewImg  src={inf.image} />
                      ))
                    }
                  </div>
                </div>

                
                </div>

              <div  style={{position: 'relative' , width: '100%', height: '400px', margin: '22px 0', }}>
                  {/* <NewImg preview={{ visible: false, }} width={200} src={pageInfo?.images}
                    onClick={() => setVisible(true)} /> */}
                  <div style={{display: 'none'}}>
                   <NewImg.PreviewGroup preview={{visible,onVisibleChange: (vis) => setVisible(vis),}} >
                    {
                      pageInfo?.images?.map(inf =>(
                        <NewImg style={{display: 'none'}} src={inf.image} />
                      ))
                    }
                    </NewImg.PreviewGroup>
                    </div>
                <Image alt={pageInfo?.name || 'Картинка места туризма'} loader={() => pageInfo?.image} src={pageInfo?.image || nomad}
                    onClick={() => setVisible(true)} fill style={{objectFit: 'cover'}}/>
              </div>
                


                
              </div>
                    <div className="div2">
                      <h2 className='aist_div2_title'>TAGS</h2>
                      <div className='aist_div2_title_borderLine'></div>
                      <div className='aist_div2_links'>
                         {
                              pageInfo?.tags?.map((str , idx)=> (
                                <li key={idx}>
                                  <Link href={{pathname:'/allTours', query: {tag:str, search:''}}} key={idx}> #{str} </Link>
                                </li>
                              ))
                          }                   
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </section>
    </div>
    </>
  );
};

export default place;
