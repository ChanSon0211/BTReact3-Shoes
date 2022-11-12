import React, { Component } from 'react'
import styles from "../components/ProductList.module.css";
import ProductItem from './ProductItem';
export default class ProductList extends Component {
    products = [
        { id: 1, name: "iphone 14", price: 1400 },
        { id: 2, name: "iphone 15", price: 1500 },
        { id: 3, name: "iphone 16", price: 1600 },
        { id: 4, name:  "iphone 17", price: 1700 }
    ];


    // Bước1 : render ra màn hình  , map dữ liệu từ mảng thành div
    renderProducts = () => {
        const html = this.products.map((item) => {
            return (
                <div key={item.id} className={styles.col}>
                 <ProductItem prod={item}  />

                </div>
            );
        })
        console.log(html)
        return html;
    }



// Bước tổng  render chính
    render() {
      
        return (
            <div>
                <h1>Danh sách sản phẩm </h1>
                <div className={styles.row}>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}
