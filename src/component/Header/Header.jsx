import React,{Component} from "react"
import ReactDom from "react-dom"
import propTypes from "prop-types"
class Header extends Component {
    constructor() {
        super();
        this.state = {
            login: false,
        }
    }
 
    render() {
        {
            let str = ""
            if (this.state.login) {
                str = "欢迎你"
            }
            else {
                str = "请登录"
            }
            return (
                <div>  
                    <h1> 我是页面的头部 </h1>
                    <h2> {this.props.content},{this.props.age}, {this.props.num}</h2>
                
                  
                </div> 
        )
           
        }
    }
}
Header.propTypes={
    content:propTypes.string,
    age:propTypes.number.isRequired,
    num:propTypes.string.isRequired,
    
}
Header.defaultProps={
   age:6,
   num:'5'
}
//设置默认值
export default Header;