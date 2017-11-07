import React,{Component} from "react"
import ReactDom,{findDOMNode} from "react-dom"
import Header from "./component/Header/Header.jsx"
import Footer from "./component/Footer/Footer"






class Index extends Component{
    constructor(){
        super();
        this.state={
            a:50,
        }
    }
    update=(e)=>{
        console.log(findDOMNode(this.refs.one).value)
        this.setState({
            a:e.target.value
        })

    }
    render(){
        return(
          <div>
             
              <Header age={8} content="223434"/>
             
          </div>
          
        )
    }
}

ReactDom.render(<Index></Index>,document.getElementById('app'))