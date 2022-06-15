import React, { SyntheticEvent } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Sneaker } from '../../Interfaces/Interfaces';
import { SetState } from '../../types/types';
import SneakerOverlay from '../SneakerOverlay/SneakerOverlay';
import './overlay.scss';

interface OverlayProps {
    setIsOverlayOpen: SetState<boolean>
}

export default function Overlay({ setIsOverlayOpen }: OverlayProps) {
    const closeOverlay = () => setIsOverlayOpen(prev => !prev);
    const cart = useAppSelector(state => state.cartReducer.cart);

    return (
        <div className="overlay">
            <div className="overlay__drawer">
                <h2 className="overlay__title">
                    <span>Корзина</span>
                    <img onClick={closeOverlay} src="img/overlay-remove-active.svg" alt="close" />
                </h2>
                <ul className="overlay__list">
                    {
                        cart.map(({ title, id, imgpath, price }: Sneaker) =>
                            <SneakerOverlay
                                id={id}
                                imgpath={imgpath}
                                price={price}
                                title={title}
                                key={id} />)
                    }

                </ul>
                <div className="overlay__result result-overlay">
                    <div className="result-overlay__total total">
                        <span className="total__cost">Итого:</span>
                        <div className="total__dashed" />
                        <div className="total__price">21 498 руб.</div>
                    </div>
                    <div className="result-overlay__tax tax">
                        <span className="tax__cost">Налог 5%:</span>
                        <div className="tax__dashed" />
                        <div className="tax__price">1074 руб.</div>
                    </div>
                    <div className="result-overlay__order">
                        <span>Оформить заказ</span>
                        <img src="img/overlay-arrow.svg" alt="further" />
                    </div>
                </div>
            </div>
        </div>
    );
};
