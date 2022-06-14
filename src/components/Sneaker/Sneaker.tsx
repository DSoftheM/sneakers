import { useState } from "react";
import { ImgPath } from "../../Enums/Enums";
import { Sneaker } from "../../Interfaces/Interfaces";

interface SneakerCardProps extends Sneaker {
    addToLiked: (item: Sneaker) => void,
    addToCart: (item: Sneaker) => void,
}

export default function SneakerCard(props: SneakerCardProps) {
    const { id, imgpath, price, title, addToLiked, addToCart } = props;
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const getHeartStatus = (): string => isLiked ? ImgPath.activeHeart : ImgPath.inactiveHeart;
    const getAddStatus = (): string => isAdded ? ImgPath.activeAdd : ImgPath.inactiveAdd;

    return (
        <div key={id} className="sneakers__container">
            <div className="sneakers__item item-sneakers">
                <div className="item-sneakers__img">
                    <div onClick={() => addToLiked(props)} className="item-sneakers__heart">
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
                        <div onClick={() => addToCart(props)} className="item-sneakers__add">
                            <img src={getAddStatus()} alt='item' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
