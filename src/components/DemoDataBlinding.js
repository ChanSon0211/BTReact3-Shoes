import React, { Component } from 'react'
import styles from "./Ex1/DemoDataBlinding.module.css";
import clsx from "clsx";

export default class DemoDataBlinding extends Component {
//  tạo 1 biến cho 1 class không có var
    fullName = "Sua";
    age = 27;
    
    state = {
        isLogin : false,
    };


showMessage (){
    return(
    <div>
       <h1>Helloworld</h1>
    </div>
    )
}
showAlert(){
    alert("Warning ....!")
}

showAlert2(message){
    alert(message)
}
showAlert3 = () => {
    alert(this.fullName + this.age)
}
// log in
handleLogin = () => {

this.setState({
    isLogin:true,
})
}
// log out
handleLogout =  () =>{
this.setState({
    isLogin:false,
})
}

renderLogin(){
    if(this.state.isLogin){
        return (  <div style={{
            backgroundColor: "yellow",
            width:300,
            padding :30
        }}>
            <h1 className={styles.title}>Welcome</h1>
          <button className={clsx(styles.btn)} onClick={this.handleLogout} type="">Log out</button>
         </div>
         )
    }
    return <button className={clsx (styles.btn , styles.btn1, {
        [styles.title]:true
    })} onClick={this.handleLogin} type="">Login</button>
}


    render() {
    return (
      <div>
          {this.renderLogin()}
        {/* <h1>Hello, {this.fullName}. I'm {this.age}</h1>
        <p>Cybersoft</p>
        {this.showMessage()}
        <button onClick={this.showAlert} type="">Alert1</button>
        <button onClick={()=> {
            this.showAlert2("hello");
        }} type="">Alert2</button>
        <button onClick={this.showAlert3} type="">Alert3</button> */}

   
     
      </div>
  
    )
  }
}
