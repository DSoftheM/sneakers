import { FC } from "react";

interface CartProps {
    setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Cart: FC<CartProps> = ({ setIsOverlayOpen }) => {
    return (
        <div onClick={() => setIsOverlayOpen(prev => !prev)} className="right-header__cart header-cart">
            <div className="header-cart__img">
                <img src="img/header-cart.svg" alt="cart" />
            </div>
            <div className="header-cart__price">
                1205 руб.
            </div>
        </div>
    );
};

export default Cart;
