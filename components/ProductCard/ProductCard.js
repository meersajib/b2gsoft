import React, { useEffect } from 'react';
import Image from 'next/image'
import styles from './ProductCard.module.css'

// import material items
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';

// Import context api
import { useStatus } from '../../Context/StatusContext';


const useStyles = makeStyles({
    root: {
        // width: 300,
    },
});


const ProductCard = (props) => {



    const { products } = props;


    const { cartItems, setcartItems, message, setMessage } = useStatus();

    const addToCart = (product) => {
        const is_exist = cartItems.find(productCode => productCode.code == product.code);

        if (!is_exist) {
            product['quantity'] = 1;
            setcartItems((cartItems) => [...cartItems, product]);
            setMessage(product?.title + 'Added to Your Cart!');
            setTimeout(() => {
                setMessage('')
            }, 3000);
        } else {
            const index = cartItems.findIndex(productCode => productCode.code == is_exist.code);
            cartItems[index].quantity++;
            setcartItems(cartItems);
            setMessage(cartItems[index]?.quantity + ' ' + product?.title + ' Added to Your Cart!');
            setTimeout(() => {
                setMessage('')
            }, 3000);
        }
    }

    useEffect(() => {
    }, [cartItems])

    return (
        <div className={styles.main}>
            {products?.map((product) =>
                <Card key={product?.code} className={styles.card}>
                    {product?.salePrice ? <span className={styles.discount}>{((product?.regularPrice - product?.salePrice) / product?.regularPrice) * 100}% off</span> : null}
                    <Image
                        height={300}
                        width={300}
                        src={product?.imgSrc}
                        alt={product?.title} />

                    <CardContent>
                        <div className={styles.flex_left_right}>
                            <span className={styles.flex_attach}><StarIcon style={{ fontSize: 15 }} />{product?.rating} / 5 </span>
                            <span>{product?.sale} sold</span>
                        </div>
                        <h2>{product?.title}</h2>
                        <div className={styles.code}>Code : <span>{product?.code}</span></div>
                        <div className={styles.prices}>
                            <span>Tk {product?.regularPrice}</span>
                            <span>Tk {product?.salePrice}</span>
                        </div>
                        <div className={`${styles.button__container} ${styles.flex_left_right}`}>
                            <Button onClick={() => addToCart(product)} variant="contained" size="small" color="primary">
                                Add To Cart
                            </Button>
                            <Button variant="contained" size="small" >
                                Order Now
                            </Button>
                        </div>
                    </CardContent>

                </Card>


            )}
        </div>
    )
}

export default ProductCard
