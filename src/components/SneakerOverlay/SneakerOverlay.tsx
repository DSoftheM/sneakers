import { SneakerOverlayProps } from "../../Interfaces/Props";


export default function SneakerOverlay({ title, id, imgpath, price }: SneakerOverlayProps) {
    return (
        <li className="overlay__item item-overlay">
            <div className="item-overlay__left">
                <img src={imgpath} alt="sneakers" />
            </div>
            <div className="item-overlay__center">
                <div className="item-overlay__title">{title}</div>
                <div className="item-overlay__price">{price.toLocaleString('ru')} руб.</div>
            </div>
            <div className="item-overlay__remove">
                <img src="img/overlay-remove-active.svg" alt="remove" />
            </div>
        </li>
    );
};
