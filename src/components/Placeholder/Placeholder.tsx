import './placeholder.scss';

export default function Placeholder() {
    return (
        <div className="sneakers__container sneakers__container_placeholder">
            <div className="sneakers__item item-sneakers">
                <div className="item-sneakers__img">
                    <div className="img-placeholder"></div>
                </div>
                <div className="item-sneakers__title">
                    <div className="title-placeholder"></div>
                </div>
                <div className="item-sneakers__footer">
                    <div className="item-sneakers__left">
                        <div className="item-sneakers__cost">
                            <div className="cost-placeholder"></div>
                        </div>
                        <div className="item-sneakers__price">
                            <div className="price-placeholder"></div>
                        </div>
                    </div>
                    <div className="item-sneakers__right">
                        <div className="item-sneakers__add">
                            <div className="add-placeholder"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
