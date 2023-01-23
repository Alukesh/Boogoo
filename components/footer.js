export default function Footer({children}){
    return(
        
    //     <footer>
    //     <div className="footer">
    //         <div className="container">
    //             <div className="position">
    //                 <div className="footertext1">
    //                     <p className="h1text">О компании</p>
    //                     <p className="loremtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
    //                         sit
    //                         amet luctus
    //                         venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
    //                 </div>
    //                 <div className="footertext2">
    //                     <p className="h1text">Информация </p>
    //                     <p className="inst">Услуги </p>
    //                     <p className="inst">О нас </p>
    //                     <p className="inst">Контакты</p>
    //                     <p className="inst">Портфолио </p>
    //                     <p className="inst">Производство </p>
    //                 </div>
    //                 <div className="footertext3">
    //                     <p className="h1text">Контактная информация</p>
    //                     <p className="inst">Бишкек, ул. Калык Акиева 66, ТЦ Весна, 3 этаж, офис №37</p>
    //                     <p className="inst">+996 (0553) 577-575</p>
    //                     <p className="inst">Email@gmail.com</p>
    //                 </div>
    //                 <div className="footertext4">
    //                     <p className="h1text">Мы в социальных сетях </p>
    //                     <p className="inst">Instagram </p>
    //                     <p className="inst">Facebook</p>
    //                 </div>
    //             </div>

    //         </div>

    //     </div>
    // </footer>
        <footer className="footer">
        <div className="container">
            <div className="footer__info">
                <div className="footer__info-company">
                    <h4 className="footer__info-title">COMPANY</h4>
                    
                    <p className="footer__info-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>
                {
                    false &&
                    <button className="linksBurger">
                        <span className="footer__info-title">LINKS</span>
                    </button>
                }
                
                <div className="footer__info-links">
                    <h4 className="footer__info-title">LINKS</h4>
                    <div className="footer__info-menu">
                        <ul className="footer__info-list">
                            <li><a className="footer__info-link" href="#">Главная</a></li>
                            <li><a className="footer__info-link" href="#">Туры</a></li>
                            <li><a className="footer__info-link" href="#">Галерея</a></li>
                            <li><a className="footer__info-link" href="#">FAQ</a></li>
                            <li><a className="footer__info-link" href="#">О нас</a></li>
                        </ul>
                        <ul className="footer__info-list">
                            <li><a className="footer__info-link" href="#">FAQ</a></li>
                            <li><a className="footer__info-link" href="#">TERMS</a></li>
                            <li><a className="footer__info-link" href="#">CAREERS</a></li>
                        </ul>
                        {/* <ul className="footer__info-list">
                            <li><a className="footer__info-link" href="#">BLOG</a></li>
                            <li><a className="footer__info-link" href="#">PARTNERS</a></li>
                            <li><a className="footer__info-link" href="#">NEWS</a></li>
                        </ul> */}
                    </div>


                </div>
                <div className="footer__info-contact">
                    <div className="footer__info-address">
                        <h4 className="footer__info-title">CONTACT US</h4>
                        <a className="footer__info-address-link" href="https://goo.gl/maps/AG4g7NUgWb885CJ78">213 Baker Street
                            Oriel City Kounty 7000 KNW, Country Name </a>
                        <a className="footer__info-address-link" href="tel:239942334022">+23 994 233 4022</a>
                        <a className="footer__info-address-link" href="mailto:info@konstruct.com">info@konstruct.com</a>
                    </div>
                    <div className="footer__info-contact-social">
                        <a className="icon-facebook-official" href="#"></a>
                        <a className="icon-twitter" href="#"></a>
                        <a className="icon-google" href="#"></a>
                    </div>
                </div>
            </div>
        </div>
            {/* <div className="footer__bottom">
                <div className="container">
                    <p className="footer__bottom-text">© 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
                </div>
            </div> */}
    </footer>

    )
}