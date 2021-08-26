import React from 'react'
import Link from 'next/link'
import styles from './layout.module.css';
import NotificationBar from '../NotificationBar/NotificationBar';
import MiniCart from '../MiniCart/MiniCart';

const Layout = ({ children }) => {
    return (
        <div>
            <header className={styles.main}>
                <div className={styles.nav__container}>
                    <Link href='/b2gsoft/home'>
                        <a>Home</a>
                    </Link>
                    <Link href='/question-one'>
                        <a>Question 1</a>
                    </Link>
                    <Link href='/question-two'>
                        <a>Question 2</a>
                    </Link>
                    <Link href='/b2gsoft/cart'>
                        <a>
                            Cart
                        </a>
                    </Link>
                </div>
            </header>
            <NotificationBar />
            <MiniCart />
            {children}
            <footer className={styles.footer__wrapper}>
                <p>Copyright B2GSOFT 2021</p>
            </footer>
        </div>
    )
}

export default Layout
