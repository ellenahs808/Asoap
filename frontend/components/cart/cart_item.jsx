import React from 'react'
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.cartId,
            product_id: props.productId,
            quantity: props.quantity
        }
    }


    // componentDidMount() {
    //     this.props.fetchAllCartItems();
    // }


    // componentDidUpdate(prevProps) {
    //     if (Object.values(prevProps.cartItems).length !== Object.values(this.props.cartItems).length) {
    //         this.props.fetchAllCartItems();
    //     }
    // }


    handleQuantity() {
        return (e) => {
            this.setState({ quantity: e.target.value }, () => this.props.updateCartItem(this.state))
        }
    }


    quantityDropDown() {
        let qty = [];
        for (let i = 1; i <= 10; i++) {
            qty.push(<option value={`${i}`} key={i} >{i}</option>)
        }
        return qty;
    }


    // handleRemoveItem() {
    //     return(e) => {
    //         e.preventDefault()
    //         this.props.deleteCartItem(this.props.cartId)
    //             .then(console.log("removed"))
    //     }
    // }



    render() {
        let { product, quantity, openToggle } = this.props
        if (!product) return null;

        return (
            <div>
                <div className="cart-item">
                    <Link to={`/products/${product.id}`} onClick={openToggle}>
                        { product.name }
                    </Link>
                    <h2>{ product.size }</h2>
                    <div className="update-qty">
                        <select id="cart" value={quantity} onChange={this.handleQuantity()} >
                            {/* <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option> */}
                            {this.quantityDropDown()}
                        </select>
                        <div className="remove-cart-item">
                            <button onClick={() => { this.props.deleteCartItem(this.props.cartId); }}>Remove</button>
                        </div>
                    </div>
                    <div>{quantity}</div>
                    <div>${ product.price }.00</div>
                </div>

            </div>
        )
    }
}


export default CartItem