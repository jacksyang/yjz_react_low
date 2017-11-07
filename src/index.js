import React,{Component} from "react"
import ReactDom from "react-dom"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"






let data=[{
    str:"1231231"
}];







class Index extends React.Component{
    render(){
        return(
          <div>
              <Header content={data[0].str}/>
              <footer></footer>  
          </div>
          
        )
    }
}

ReactDom.render(<Index></Index>,document.getElementById('app'))