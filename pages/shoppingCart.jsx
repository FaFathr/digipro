import React from 'react'
import styles from './shoppingCart.module.css'
import ShoppingCartItems from '@/components/shoppingCart/ShoppingCartItems'
import { Tab, Tabs } from 'react-bootstrap'
import ShoppingCartNext from '@/components/shoppingCart/ShoppingCartNext'

const shoppingCart = () => {
  return (
    <div className={`${styles.outerContainer}`} >
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3" dir="rtl"
    >
      <Tab  className={`${styles.Container1}`} eventKey="سبد خرید" title="سبد خرید">
        <ShoppingCartItems/>
      </Tab>
      <Tab className={`${styles.Container2}`} eventKey="خرید بعدی" title="خرید بعدی">
       <ShoppingCartNext/>
      </Tab>
      
    </Tabs>

    </div>

  )
}

export default shoppingCart
