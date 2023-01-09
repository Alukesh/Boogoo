export default function Footer({children}){
    return(
        <footer>
        <div className="footer">
            <div className="container">
                <div className="position">
                    <div className="footertext1">
                        <p className="h1text">О компании</p>
                        <p className="loremtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
                            sit
                            amet luctus
                            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
                    </div>
                    <div className="footertext2">
                        <p className="h1text">Информация </p>
                        <p className="inst">Услуги </p>
                        <p className="inst">О нас </p>
                        <p className="inst">Контакты</p>
                        <p className="inst">Портфолио </p>
                        <p className="inst">Производство </p>
                    </div>
                    <div className="footertext3">
                        <p className="h1text">Контактная информация</p>
                        <p className="inst">Бишкек, ул. Калык Акиева 66, ТЦ Весна, 3 этаж, офис №37</p>
                        <p className="inst">+996 (0553) 577-575</p>
                        <p className="inst">Email@gmail.com</p>
                    </div>
                    <div className="footertext4">
                        <p className="h1text">Мы в социальных сетях </p>
                        <p className="inst">Instagram </p>
                        <p className="inst">Facebook</p>
                    </div>
                </div>

            </div>

        </div>
    </footer>
    )
}