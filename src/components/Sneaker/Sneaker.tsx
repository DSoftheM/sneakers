import { useState } from "react";
import { ImgPath } from "../../Enums/Enums";
import { Sneaker } from "../../Interfaces/Interfaces";


export default function SneakerCard({ id, imgpath, price, title }: Sneaker) {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const changeHeart = () => setIsLiked(isLiked => !isLiked);
    const getHeartStatus = (): string => isLiked ? ImgPath.activeHeart : ImgPath.inactiveHeart;
    return (
        <div key={id} className="sneakers__container">
            <div className="sneakers__item item-sneakers">
                <div className="item-sneakers__img">
                    <div onClick={changeHeart} className="item-sneakers__heart">
                        <img src={getHeartStatus()} alt="favourite" />
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
