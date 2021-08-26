import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from '../../public/assets/css/home.module.css'

const Home = () => {
    const data = [
        {
            imgSrc: '/assets/images/products/six.jpg',
            title: 'Spider Man Costume',
            regularPrice: 1500,
            salePrice: 690,
            code: '001',
            sale: 1200,
            rating: 4.5,
        },
        {
            imgSrc: '/assets/images/products/six.jpg',
            title: 'Spider Man Costume  For Kids',
            regularPrice: 1500,
            salePrice: 690,
            code: '002',
            sale: 1200,
            rating: 4.5,
        },
        {
            imgSrc: '/assets/images/products/six.jpg',
            title: 'Spider Man Costume',
            regularPrice: 1500,
            salePrice: 690,
            code: '003',
            sale: 1200,
            rating: 4.5,
        },
        {
            imgSrc: '/assets/images/products/six.jpg',
            title: 'Spider Man Costume For Kids',
            regularPrice: 1500,
            salePrice: 690,
            code: '004',
            sale: 1200,
            rating: 4.5,
        },
        {
            imgSrc: '/assets/images/products/six.jpg',
            title: 'Spider Man Costume',
            regularPrice: 1500,
            salePrice: 690,
            code: '005',
            sale: 1200,
            rating: 4.5,
        },
        {
            imgSrc: '/assets/images/products/six.jpg',
            title: 'Spider Man Costume For Kids',
            regularPrice: 1500,
            salePrice: 690,
            code: '006',
            sale: 1200,
            rating: 4.5,
        },
    ]

    const [products, setProducts] = useState(data)

    return (
        <div className={styles.main}>
            <ProductCard products={products} />
        </div>
    )
}

export default Home
