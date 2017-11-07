import React,{Component} from "react"
import ReactDom from "react-dom"
class Range extends Component{
    constructor(){
        super();
    }
    render(){
        return (
             <input onChange={this.props.update}  type="range" min="0" max="100"/>
        )
       
    }
}
export default Range