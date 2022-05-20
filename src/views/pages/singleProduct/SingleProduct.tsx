import useAPI from 'hooks/useAPI';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add_to_cart, remove_from_cart } from 'redux/actions/cartAction';
import ProductService from 'services/Product.service';

const SingleProduct = () => {
    // const { id = "" } = useParams();
    // const dispatch = useDispatch();
    const { data:product } = useAPI<IProduct>(() =>
        ProductService.getProductDetailsById(id))

    const dispatch = useDispatch();

    return (
        <div>
            {product ? <h5>Image here</h5> : null}
            <button className='p-2 border' onClick={() => dispatch(add_to_cart(product as IProduct))}

            >Add to cart</button>
            <button className='p-2 border' onClick={()=>dispatch(remove_from_cart(id))}>Remove from cart</button>
        </div>
    );
};

export default SingleProduct;