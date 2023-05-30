import React from 'react';
import './ProductCard.css';



function ProductCard(props) {
    const availability = props.product.availability;
    const image = props.product.image;
    const rating = props.product.rating;
    const title = props.product.name;
    const price = props.product.price;
    const reviews = props.product.reviews;
    const onClothClick = props.onClothClick;

    let ratingStars = function () {
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span className="fa fa-star checked"></span>);
        }
        for (let i = 0; i < (5 - rating); i++) {
            stars.push(<span className="fa fa-star"></span>);
        }
        return stars;
    }

    let imgURL = "url(" + image + ")";

    const imgStyle = {
        backgroundImage: imgURL
    };
    return (
        <div className='ProductCard' onClick={() => onClothClick(props.product)}>
            <div className='ProductImage' style={imgStyle}>
                <div className='card-price'>Rs.{price}</div>
            </div>
            <div className='ProductCardDetails'>
                <div className='ProductTitle'>{title}</div>
                <div className='Availability'>
                    Availability:
                    {availability === true && (
                        <div className='available'>In Stock</div>
                    )}
                    {availability === false && (
                        <div className='unavailable'>Out of Stock</div>
                    )}
                </div>
                <div className='Ratings'>
                    Ratings:
                    <div className='Stars'>
                        <span>&#40;{reviews}&#41;&nbsp;</span>
                        {ratingStars()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;