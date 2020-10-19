import React from 'react';
import { Link } from 'react-router-dom';
import CartItemContainer from '../cart/cart_item_container'




// class RightNavbar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             open: false
//         }

//         this.openToggle = this.openToggle.bind(this)
//     }


//     openToggle() {
//         this.setState({ open: !this.state.open })
//     }


//     loggedInOrOut() {
//         if (this.props.loggedIn) {
//             return (
//                 <div className="right-nav">
//                     <div className="right-nav-greeting">
//                         <h1 className="login-greeting">Hi, {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>

//                         <p className="cart-link" onClick={this.openToggle}>Cart</p>
                       
                    
//                         <Link to="/" className="logout-link" onClick={this.props.logout}>Log Out</Link>
//                     </div>
//                 </div>
//             )
//         } else {
//             return (
//                 <nav className="right-nav">
//                     <div className="logged-out">
//                         <ul className="login-register">
//                             <li><Link className="login-link" to="/login" >Login</Link> </li>
//                             <li><Link className="signup-link" to="/signup" >Register</Link></li>
//                         </ul>
//                     </div>
//                 </nav>
//             )
//         }
//     }



//     render() {
//         const { currentUser } = this.props
//         const cart = <CartItemContainer openToggle={this.openToggle}/>

//         // const loggedIn = () => (
//         //     <div className="right-nav">
//         //         <div className="right-nav-greeting">
//         //             <h1 className="login-greeting">Hi, {currentUser.first_name} {props.currentUser.last_name}</h1>
//         //             <Link to="/cart" className="cart-link">Cart
//         //                 <div className="cart-open" onClick={this.openToggle}>Cart Open</div>
//         //             </Link>
//         //             <Link to="/" className="logout-link" onClick={props.logout}>Log Out</Link>
//         //         </div>
//         //     </div>
//         // )


//         // const loggedOut = () => (
//         //     <nav className="right-nav">
//         //         <div className="logged-out">
//         //             <ul className="login-register">
//         //                 <li><Link className="login-link" to="/login" >Login</Link> </li>
//         //                 <li><Link className="signup-link" to="/signup" >Register</Link></li>
//         //             </ul>
//         //         </div>
//         //    </nav>
//         // )
//         return (
//             <div>
//                 { this.state.open && cart }
                
//                 {/* {currentUser ? loggedIn() : loggedOut()} */}
//                 {this.loggedInOrOut()}

//             </div>

//         )
//     }


// };












const RightNavbar = props => {

    const loggedIn = () => (
        <div className="right-nav">
            <div className="right-nav-greeting">
                <h1 className="login-greeting">Hi, {props.currentUser.first_name} {props.currentUser.last_name}</h1>
                <Link to="/" className="logout-link" onClick={props.logout}>Log Out</Link>
            </div>
        </div>
    )


    const loggedOut = () => (
        <nav className="right-nav">
            <div className="logged-out">
                <ul className="login-register">
                    {/* <li><Link className="login-link" to="/login" >Login</Link> </li> */}
                    <li><button className="login-link" onClick={() => props.openModal("login")}>Login</button></li>
                    {/* <li><Link className="signup-link" to="/signup" >Register</Link></li> */}
                    <li><button className="signup-link" onClick={() => props.openModal("signup")}>Register</button></li>
                </ul>
            </div>
        </nav>
    )

    return props.currentUser ? loggedIn() : loggedOut();

};








export default RightNavbar;