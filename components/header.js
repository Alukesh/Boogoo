import  Image  from 'next/image';
import bish from '../public/bish.png'



export default function Header(){
    return(
        <header>
        <div className="headerheader">
            <p className="slogan">Boogoo KG</p>
            <div className="around">
                <p className="question">Нужна помощь? Свяжитесь с нашим экспретом</p>
                <a href="tel:+996551244141" className="number">+996 (551) 244 141</a>
            </div>
        </div>
        <nav className="navigation">
            <div>
                <Image className="logo"
                    src={bish}
                    alt="logo" width={40} height={40} priority/>
            </div>
            <ul className="ulnav">
                 <li><a className="nav" href="#">Услуги</a></li>
                <li><a className="nav" href="#">Главная</a></li>
                <li><a className="nav" href="#">Туры</a></li>
                <li><a className="nav" href="#">Галерея</a></li>
                <li><a className="nav" href="#">Контакты</a></li>
            </ul>
        </nav>
    </header>
    )
}