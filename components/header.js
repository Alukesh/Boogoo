import  Image  from 'next/image';
import Link from 'next/link';
import bish from '../public/bogoo.jpg'
import { Select } from 'antd';
import { useState, useEffect } from 'react';


export default function Header(){
    const [defLang, setDefLang] = useState('ru')

    const langData = ['ru', 'en', 'de'];
   
    
       
           useEffect(() => setDefLang(localStorage.getItem('lang'))  ,[])
        console.log(defLang);

    const handleLangChange = (value) => {
        localStorage.setItem('lang', value)
      window.location.reload()
      // alert(value);
    }
    
    return(
        <>
    <header>
        <nav className="navigation">
            <div>
                <Image className="logo"
                    src={bish}
                    alt="logo" width={90} height={160} priority/>
            </div>
            <ul className="ulnav">
                {/* <Link href={{
                    pathname: '/tours',
                    query: { id: 2, comment: 'asdsa'},
                }}>asdsa</Link> */}
                <Link  className="nav" href={{
                    pathname: '/'
                }}>Главная</Link>
                <li><a className="nav" href="#">Туры</a></li>
                <Link  className="nav" href={{
                    pathname: '/gallery'
                }}>Галерея</Link>
                <Link  className="nav" href={{
                    pathname: '/faq'
                }}>FAQ</Link>
                <li><a className="nav" href="#">Контакты</a></li>
            </ul>
        
        </nav>
       
    </header>
    
        <div className='navigation__lang'>
            <img width={30} src="https://img.icons8.com/metro/26/null/globe.png"/>
             <Select
                defaultValue={defLang || langData[0]}
                style={{width: 70}}
                onChange={handleLangChange}
                options={langData.map((lang) => ({
                label: lang,
                value: lang,
                })
            )}/>
        </div>
         
        </>
    )
}