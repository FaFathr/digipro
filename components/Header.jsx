import React from 'react'
import TopBanner from './TopBanner'
import SearchBox from './SearchBox'
import Digikala from './Digikala'
import LogReg from './LogReg'
import BasketButton from './BasketButton'
import MenueCategory from './MenueCategory'



const Header = () => {
  return (
    <div>
     <TopBanner/>
     <SearchBox/> 
     <MenueCategory/>
    </div>
  )
}

export default Header
