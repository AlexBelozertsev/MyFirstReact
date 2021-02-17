import React from "react"; //обязательно! подключение реакта к модулю
import PropTypes from "prop-types"; // подключение библиотеки проверки типов получаемых пропсов
import defaultImage from './default.jpg'; // подключение относительного пути к дефолтной картинке

const Painting = ({ url, title, price, authorUrl, tag, quantity }) => (
    <div>
        <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>Author: <a href={authorUrl} target="_blank" rel="noopener noreferrer">{tag}</a></p>
        <p>Price: {price}$</p>
        <p>Quanytity: {quantity <= 10 ? "товар заканчивается" : "есть в наличии"}</p>
        <button type="button">Buy</button>
    </div>
);

// описание типа для каждого пропса
Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired, //isRequired - указание обязательного пропса
    price: PropTypes.number.isRequired,
    authorUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}

// указание дефолтных значений для НЕОБЯЗАТЕЛЬНЫХ (без .isRequired) пропсов
Painting.defaultProps = {
    // url: "https://cdn.pixabay.com/photo/2017/08/04/01/30/flower-2578811_960_720.jpg", // absolute way
    url: defaultImage // relative way
};

export default Painting;