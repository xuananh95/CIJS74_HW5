import React from 'react';
import './styles.css'

const List = ({ id, title, price, description, category, image_url, rating }) => {
    return (
        <div className="container">
            <div className="img-container">
                <img className="img" src={image_url} alt={image_url} />
            </div>
            <p style={{ textAlign: 'center', fontSize: '25px', margin: '15px' }}>{title}</p>
            <p><span style={{ fontWeight: 'bold' }}>Price:</span> ${price}</p>
            <p><span style={{ fontWeight: 'bold' }}>Description:</span> {description}</p>
            <p><span style={{ fontWeight: 'bold' }}>Category:</span> {category}</p>
            <p><span style={{ fontWeight: 'bold' }}>Rating:</span> {rating.rate}</p>
            <p><span style={{ fontWeight: 'bold' }}>Number of ratings:</span> {rating.count}</p>
        </div >
    )
}

export default List