import React from "react"
import ReactDom from "react-dom"
class Header extends React.Component {
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
            setTimeout(() => {
                this.setState({
                    login: true
                })
            },1000)

            return (
                <div>  
                    <h1> 我是页面的头部 </h1>
                    <h1> {str} </h1>
                </div> 
          
        )
           
        }
    }
}
export default Header;