import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import AddToShoppingCart from './button/AddToShoppingCart'
import ShoppingCartItemCounter from './button/ShoppingCartItemCounter';
import { useSelector } from 'react-redux';

const Card = ({product}) => {
  const shoppingCart = useSelector((state) => state.shoppingCart)

  return (
    <div className={styles.mainContainer}>
        <div className={`${styles.incredibleOfferImageContainer}`}>
        {
          product.incredibleOffers === true ? <Image className={`${styles.incredibleOfferImage}`} alt={product.name} src='/images/IncredibleOffer.svg' width={100} height={15} /> : null
        }
        </div>
        <p align="justify" className={`${styles.productName}`}> {product.name.substring(0, 25)}{product.name.length > 25 ? "..." : null}</p>
       
                <Image className={`${styles.imagespro}`} alt={product.name} src={product.indexImageUrl} width={150} height={130} />
                {product.priceWithDiscount === 0 ? (
          <div className={`${styles.priceContainer}`}>
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
          </div>
        ) : (
          <div className={`${styles.priceDetail}`}>
            <div className={`${styles.priceContainer}`}>
              <div className={`${styles.priceBeforeOff}`}>
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
              <div>
                {product.priceWithDiscount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
            </div>
            <label className={`${styles.offPrcent}`}>
              {Math.floor(
                ((product.price - product.priceWithDiscount) / product.price) * 100
              )}
              %
            </label>

          </div> 

        )}
        {shoppingCart.items.find((item) => item.id === product.id) ? (
        <ShoppingCartItemCounter productId={product.id} />
        ) : product.stock !== 0 ? (
          <AddToShoppingCart product={product} />
        ) : (
          <span>ناموجود</span>
        )}
      </div>
    );
  };

export default Card