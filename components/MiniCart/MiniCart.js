import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from './MiniCart.module.css'
import { useStatus } from '../../Context/StatusContext';
import Link from 'next/link';

const MiniCart = () => {
    const { cartItems } = useStatus()

    return (
        <Link href='/b2gsoft/cart'>
            <a>
                <div className={styles.main}>
                    <ShoppingCartIcon />
                    <span>{`${cartItems?.length} ${cartItems?.length > 1 ? `Items` : `Item`}`}</span>
                </div>
            </a>
        </Link>
    )
}

export default MiniCart
