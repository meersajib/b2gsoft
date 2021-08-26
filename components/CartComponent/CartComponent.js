import React, { useEffect } from 'react'
import styles from '../../public/assets/css/cart.module.css'
import Image from 'next/image'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useStatus } from '../../Context/StatusContext';

const CartComponent = () => {
    const { cartItems, setcartItems } = useStatus();

    const updateCart = (product, qty) => {
        const index = cartItems?.findIndex(productCode => productCode?.code == product?.code);
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += qty;
        if (newCartItems[index].quantity > 0) {
            setcartItems(newCartItems)
        } else {
            newCartItems.splice(index, 1);
            setcartItems(newCartItems);
        }
    }

    useEffect(() => {
    }, [cartItems])

    return (
        <>
            {cartItems?.length ?
                <>
                    {cartItems?.map((product) =>
                        <div key={product?.code} className={styles.cart__wrapper}>
                            <div className={styles.cart__content__wrapper}>
                                <div className={styles.cart__content}>
                                    <h2>{product?.title}</h2>
                                    <p>{product?.title}</p>
                                </div>
                                <div className={styles.cart__footer_wrapper}>
                                    <div>
                                        <FavoriteBorderIcon style={{ fontSize: 16, marginRight: '10px' }} /> <span>0</span>
                                    </div>
                                    <div className={styles.price_container}>
                                        <h4 className={styles.regular__price}>Tk {product?.salePrice}</h4>
                                        <h4 className={styles.sale__price}>Tk {product?.regularPrice ? product?.regularPrice : null}</h4>
                                        <div className={styles.counter__wrapper}>

                                            <RemoveIcon onClick={() => updateCart(product, -1)} style={{ fontSize: 15, border: '1px solid orange', cursor: 'pointer' }} />
                                            <span className={styles.quantity}>{product?.quantity}</span>
                                            <AddIcon onClick={() => updateCart(product, 1)} style={{ fontSize: 15, border: '1px solid orange', cursor: 'pointer' }} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.image__container}>
                                <Image height={200} width={200} src={product?.imgSrc} alt='No Items found' />
                            </div>
                        </div>
                    )}
                </>
                :
                'No product found!'
            }
        </>
    )
}

export default CartComponent
