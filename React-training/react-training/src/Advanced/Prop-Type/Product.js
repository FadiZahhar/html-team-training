import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/default.jpeg';

const Product = ({ image, name, price }) => {

  const url = image && image.url;

  return (

   <article>
    <img src={url || defaultImage} alt={name || 'default name'} />
    <h3>{name}</h3>
    <p>${price || 3.99}</p>
   </article>

  );
};

//PropTypes exports a range of validators that can be used to make sure the data you receive is valid

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
// name: 'default name',
// price: 3.99,
// image: defaultImage,
// };

export default Product;