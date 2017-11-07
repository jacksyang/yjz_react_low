import React,{Component} from "react"
import ReactDom,{findDOMNode} from "react-dom"
import Header from "./component/Header/Header.jsx"
import Footer from "./component/Footer/Footer"
import Range from "./component/Range/Range.jsx"



let data=[{
    str:"1231231"
}];


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
              <Range  ref="one" update={this.update}/>{this.state.a}
              <Header content={data[0].str}/>
              <Footer content='123'>123123</Footer>  
          </div>
          
        )
    }
}

ReactDom.render(<Index></Index>,document.getElementById('app'))