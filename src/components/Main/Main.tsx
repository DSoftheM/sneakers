import './main.scss';

export default function Main() {
    return (
        <div className="main">
            <div className="main__body">
                <div className="main__left left-main">
                    <div className="left-main__logo">
                        <img src="img/main-logo.png" alt="Adidas & Disney" />
                    </div>
                    <div className="left-main__center">
                        <div className="left-main__text">
                            <span className="left-main__name">Stan Smith</span>
                            <span className="left-main__comma">,</span>
                            <span className="left-main__after">Forever!</span>
                        </div>
                        <div className="left-main__btn">Купить</div>
                    </div>
                </div>
                <div className="main__right">
                    <img src="img/main-content.png" alt="Adidas frog?" />
                </div>
            </div>
        </div>
    );
};
