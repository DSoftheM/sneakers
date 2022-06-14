import React, { SyntheticEvent } from 'react';
import './overlay.scss';

interface OverlayProps {
    setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Overlay({ setIsOverlayOpen }: OverlayProps) {
    const closeOverlay = () => setIsOverlayOpen(prev => !prev);

    return (
        <div className="overlay">
            <div className="overlay__drawer">
                <h2 className="overlay__title">
                    <span>Корзина</span>
                    <img onClick={closeOverlay} src="img/overlay-remove-active.svg" alt="close" />
                </h2>
                <ul className="overlay__list">
                    <li className="overlay__item item-overlay">
                        <div className="item-overlay__left">
                            <img src="/img/all-item-4.jpg" alt="sneakers" />
                        </div>
                        <div className="item-overlay__center">
                            <div className="item-overlay__title">Мужские Кроссовки Nike Air Max 270</div>
                            <div className="item-overlay__price">12 999 руб.</div>
                        </div>
                        <div className="item-overlay__remove">
                            <img src="img/overlay-remove-active.svg" alt="remove" />
                        </div>
                    </li>
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
