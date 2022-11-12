import React, { Component } from 'react'
import styles from "./ProductItem.module.css"


export default class ProductItem extends Component {
  render() {
    console.log(this.props.prod)
    return (
        <div className={styles.item}>
                        
        <h3>Tên Sản Phẩm : {this.props.prod.name}</h3>
        <p>Giá : {this.props.prod.price} </p>
    </div>
    )
  }
}
