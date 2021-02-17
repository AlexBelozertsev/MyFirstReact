import React from "react"; //обязательно! подключение реакта к модулю
import PropTypes from "prop-types"; // подключение библиотеки проверки типов получаемых пропсов
import Painting from "./Painting";

const PaintingList = ({ items }) => (
    <ul>
        {items.map((painting) => (
            <li key={painting.id}>
                < Painting
                    url={painting.url}
                    title={painting.title}
                    price={painting.price}
                    authorUrl={painting.author.url}
                    tag={painting.author.tag}
                    quantity={painting.quantity}
                />
            </li>
        ))}
    </ul>
);

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}

export default PaintingList;