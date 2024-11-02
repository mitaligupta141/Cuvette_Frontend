import React from 'react'
import styles from './Logout.module.css'

export default function Logout_Del({ModalData}) {
 
  return (
    <div className={styles.container}>
      <span>{ModalData.headtext}</span>
      <button className={styles.btn_top} onClick={ModalData.onClick()} >{ModalData.btn_top}</button>
      <button className={styles.btn_bottom} onClick={ModalData.onclose()} >{ModalData.btn_bottom}</button>
    </div>
  )
}
