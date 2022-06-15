import { PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { ImgPath } from "../../Enums/Enums";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { Sneaker } from "../../Interfaces/Interfaces";
import { addToCart, deleteFromCart } from "../../store/slices/CartSlice";
import { SetState } from "../../types/types";

interface SneakerCardProps extends Sneaker { }

export default function SneakerCard(props: SneakerCardProps) {
    const { id, imgpath, price, title } = props;
    const sneaker = { id, imgpath, price, title };
    const dispatch = useAppDispatch();
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isAdded, setIsAdded] = useState<boolean>(false);
    const handleHeartClick = () => {
        setIsLiked(prev => !prev);
        if (!isAdded) dispatch(addToCart(sneaker))
        else dispatch(deleteFromCart({ id: sneaker.id }));
    }
    const handleAddClick = () => {
        setIsAdded(prev => !prev);
        if (!isAdded) dispatch(addToCart(sneaker))
        else dispatch(deleteFromCart({ id: sneaker.id }));
    }

    const getHeartStatus = (): string => isLiked ? ImgPath.activeHeart : ImgPath.inactiveHeart;
    const getAddStatus = (): string => isAdded ? ImgPath.activeAdd : ImgPath.inactiveAdd;

    return (
        <div key={id} className="sneakers__container">
            <div className="sneakers__item item-sneakers">
                <div className="item-sneakers__img">
                    <div onClick={handleHeartClick} className="item-sneakers__heart">
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
                        <div onClick={handleAddClick} className="item-sneakers__add">
                            <img src={getAddStatus()} alt='item' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
