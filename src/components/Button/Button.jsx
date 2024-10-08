import React, { useContext } from 'react'
import Styles from './Button.module.css'
import { contextMode } from '../AppLayout/AppLayout'
export default function Button({children,onClick}) {
  const {mode}=useContext(contextMode)
  return (
    <button onClick={onClick} className={Styles.bttn} style={{backgroundColor:mode==='dark'?'rgb(5,5,5)':'#f3f4f6',color:mode==='dark'?'#f3f4f6':'black'}}>
        {children}
    </button>
  )
}
