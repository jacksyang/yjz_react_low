import React from "react"
import ReactDom from "react-dom"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"













class Index extends React.Component{
    render(){
        return(
          <div>
              <Header></Header>  
              <footer></footer>  
          </div>
          
        )
    }
}

ReactDom.render(<Header></Header>,document.getElementById('app'))