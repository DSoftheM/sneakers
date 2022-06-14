import { useEffect, useState } from 'react';
import { ApiTitleEnum } from '../../Enums/Enums';
import DataBase from '../../model/DataBase';
import Placeholder from '../Placeholder/Placeholder';
import { Sneaker } from '../../Interfaces/Interfaces';
import './all.scss';
import SneakerCard from '../Sneaker/Sneaker';

interface AllProps {
    addToLiked: (item: Sneaker) => void;
    addToCart: (item: Sneaker) => void;
}

export default function All({ addToLiked, addToCart }: AllProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const [sneakersList, setSneakersList] = useState<Sneaker[]>([]);
    const sneakers: Sneaker[] = [];

    useEffect(() => {
        const db = new DataBase('https://62a731fcbedc4ca6d7c45ded.mockapi.io/api/');
        db.getData(ApiTitleEnum.sneakers).then(data => setSneakersList(data));
    }, []);

    const getArrPlaceholder = (count: number) => Array(count).fill(<Placeholder />, 0, count);

    return (
        <div className="all">
            <div className="all__header">
                <div className="all__title">Все кроссовки</div>
                <div className="all__search">
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" name="all-search" placeholder="Поиск..." />
                </div>
            </div>
            <div className="all__sneakers sneakers">
                <div className="sneakers__body">
                    {
                        sneakersList.map(({ id, imgpath, price, title }: Sneaker) =>
                            <SneakerCard
                                key={id}
                                id={id}
                                imgpath={imgpath}
                                price={price}
                                title={title}
                                addToLiked={addToLiked}
                                addToCart={addToCart} />)
                    }
                    {sneakersList.length === 0 && getArrPlaceholder(10)}
                </div>
            </div>
        </div>
    );
};
