import classes from "./Input.module.css"
import React from 'react'

function Input(props) {
  return (
    <div className={classes.input}>
        <label className="" htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
    </div>
  )
}

export default Input