import React from 'react';
import styles from '../../public/assets/css/cart.module.css';
import CartComponent from '../../components/CartComponent/CartComponent';
import CheckoutComponent from '../../components/CheckoutComponent/CheckoutComponent';
import Image from 'next/image';

// import context api
import { useStatus } from '../../Context/StatusContext';


const Cart = () => {
    const { cartItems, setcartItems } = useStatus();
    return (
        <>
            {cartItems?.length ?
                <div className={styles.main}>
                    <div className={styles.first__wrapper}>
                        <CartComponent />
                    </div>
                    <div className={styles.second__wrapper}>
                        <CheckoutComponent />
                    </div>
                </div> :
                <div className={styles.empty_box_container}>
                    <Image height={100} width={100} src='/empty-box.png' alt='Empty Box' />
                    <h4>Your Cart is Empty!</h4>
                </div>
            }

        </>
    )
}

export default Cart
