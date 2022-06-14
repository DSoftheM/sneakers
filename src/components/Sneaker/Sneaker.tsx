import { useState } from "react";
import { Sneaker } from "../../Interfaces/Interfaces";


export default function SneakerItem({ id, imgpath, price, title }: Sneaker) {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    return (
        <div key={id} className="sneakers__container">
            <div className="sneakers__item item-sneakers">
                <div className="item-sneakers__img">
                    <div className="item-sneakers__heart">
                        <img src="img/all-heart-active.svg" alt="favourite" />
                    </div>
                    <img src={imgpath} alt='item' />
                </div>
                <div className="item-sneakers__title">{title}</div>
                <div className="item-sneakers__footer">
                    <div className="item-sneakers__left">
                        <div className="item-sneakers__cost">цена:</div>
                        <div className="item-sneakers__price">{price.toLocaleString('ru')} руб.</div>
                    </div>
                    <div className="item-sneakers__right">
                        <div className="item-sneakers__add">
                            <img src="img/all-add.svg" alt='item' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
