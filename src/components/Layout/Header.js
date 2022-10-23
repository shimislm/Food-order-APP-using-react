import React from 'react'
import resturant from "../../assets/resturant-strip.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
          <h2 className='display-4'>My Resturant</h2>
          <HeaderCartButton/>
        </header>
        
        <div className={classes.mainImage}>
            <img src={resturant} alt="Cover photo" />
        </div>
    </React.Fragment>
  )
}

export default Header