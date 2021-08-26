import React from 'react'
import styles from '../../public/assets/css/cart.module.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useStatus } from '../../Context/StatusContext';

const CheckoutComponent = () => {
    const { cartItems, setcartItems } = useStatus();

    let totalPrice = 0;
    cartItems?.map(item => {
        totalPrice += item?.salePrice ? item?.salePrice * item?.quantity : item?.regularPrice * item?.quantity;
    })
    let vat = 118;
    let deliveryFee = 30;
    let discount = 50;
    return (
        <div className={styles.checkout_wrapper}>
            <div className={styles.checkout__container}>
                <div className={styles.checkout_head}>
                    <h3>Total Items</h3>
                    <p>{` ${cartItems?.length} ${cartItems?.length > 1 ? `Items ` : `Item `}`}Added</p>
                </div>
                <div className={styles.items_list}>
                    {cartItems?.map((item) =>
                        <div key={item?.code} className={styles.items_list_item}>
                            <h4>{item?.title}</h4>
                            <p>Tk {item?.salePrice ? item?.salePrice : item?.regularPrice}</p>
                            <div className={styles.counter__wrapper}>
                                <RemoveIcon style={{ fontSize: 15, border: '1px solid orange', cursor: 'pointer' }} />
                                <span className={styles.quantity}>{item?.quantity}</span>
                                <AddIcon style={{ fontSize: 15, border: '1px solid orange', cursor: 'pointer' }} />
                            </div>
                            <p>Tk {item?.salePrice ? item?.salePrice * item?.quantity : item?.regularPrice * item?.quantity}</p>

                        </div>
                    )}
                </div>
                <div className={styles.price__vat__container}>
                    <div>
                        <p>Price</p>
                        <p className={styles.textRight}>TK {totalPrice}</p>
                    </div>
                    <div>
                        <p>Vat</p>
                        <p className={styles.textRight}>TK {vat}</p>
                    </div>
                    <div>
                        <p>Delivery Fee</p>
                        <p className={styles.textRight}>TK {deliveryFee}</p>
                    </div>
                    <div>
                        <p>Discount</p>
                        <p className={styles.textRight}>TK {discount}</p>
                    </div>
                </div>
                <div className={styles.total__container}>
                    <div className={styles.grid_template_two}>
                        <h4>Total</h4>
                        <div className={styles.textRight}>
                            <p className={styles.regularPrice}>Tk {(totalPrice + vat + deliveryFee) - discount}</p>
                            <p className={styles.salePrice}>Tk {totalPrice + vat + deliveryFee}</p>
                        </div>
                    </div>
                    <div className={styles.notice__msg}>
                        <p>You saved <span style={{ color: 'orange', fontWeight: 'bold' }}>Tk {discount}</span> on All Items. </p>
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutComponent
