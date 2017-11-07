import React,{Component} from "react"
import ReactDom from "react-dom"
class Header extends Component {
    constructor() {
        super();
        this.state = {
            login: false,
        }
    }
    changeLogin=()=>{
        this.setState({
            login:!this.state.login
        })

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
                    <h1> {this.props.content} </h1>
                
                    <h1 onClick={this.changeLogin}> {str} </h1>
                </div> 
          
        )
           
        }
    }
}
export default Header;