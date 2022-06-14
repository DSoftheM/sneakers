import { FC } from 'react';
import Cart from './Cart';
import './header.scss';

interface HeaderProps {
    setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setIsOverlayOpen }) => {
    return (
        <header>
            <div className="header">
                <div className="header__left left-header">
                    <div className="left-header__body">
                        <div className="left-header__img">
                            <img src="img/header-logo.png" alt="logo" />
                        </div>
                        <div className="left-header__right">
                            <div className="left-header__header">
                                <h3>react sneakers</h3>
                            </div>
                            <div className="left-header__desc">Магазин лучших кроссовок</div>
                        </div>
                    </div>
                </div>
                <div className="header__right right-header">
                    <div className="right-header__body">
                        <Cart setIsOverlayOpen={setIsOverlayOpen} />
                        <div className="right-header__favourite">
                            <img src="img/header-favourite.svg" alt="favourite" />
                        </div>
                        <div className="right-header__profile">
                            <img src="img/header-profile.svg" alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
