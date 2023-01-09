import  Image  from 'next/image';
import Link from 'next/link';
import bish from '../public/bogoo.jpg'



export default function Header(){


    
    return(
        <>
    <header>
    
       
    </header>
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
                <li><a className="nav" href="#">FAQ</a></li>
                <li><a className="nav" href="#">Контакты</a></li>
            </ul>
        </nav>
        </>
    )
}