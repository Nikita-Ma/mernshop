import React from 'react';
import {Card} from "react-bootstrap";
import Rating from "./Rating";

const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
                <Card.Body>
                    <a href={`/product/${product._id}`}>
                        <Card.Title as='div'>
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </a>
                    <Card.Text as='div'>
                        <div className='my-3'>
                            <Rating value={product.rating} text={`${product.numReviews}`} color='orange'/>
                        </div>
                    </Card.Text>
                    <Card.Text as='h3'>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
};

export default Product;