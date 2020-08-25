
import React from 'react';
import { Link } from 'react-router-dom';



class CategorySidebar extends React.Component {
    constructor(props) {
        super(props)

        this.close = this.close.bind(this)
        // this.open = this.open.bind(this)
        this.handleHoverCategory = this.handleHoverCategory.bind(this)
    };


    close() {
        this.props.closeMainSidebar(false)
    };


    // open() {
    //     this.props.openMainSidebar(true)
    // };

    handleHoverCategory(category) {
        return e => {
            e.preventDefault();
            this.props.openMainSidebar(CategorySidebar)
            this.props.hoverCategory(category)
        }
    };



    render() {
        const { isOpen } = this.props;
        let openShow = isOpen ? "category-sidebar-open" : ""

        return (
            <div>
                {isOpen && <div className="backdrop" onClick={this.close}></div>}
                    <div className={"category-sidebar " + openShow}>
                        <div className="first-sidebar">
                            <div className="first-sidebar-nav-li-div">
                                <ul className="sidebar-nav-li">
                                    <li className="shop-nav"><Link className="shop-link" onClick={this.open}>Shop</Link></li>
                                    <li className="read-nav"><Link className="read-link" onClick={this.open}>Read</Link></li>
                                    <li className="stores-nav"><Link className="stores-link" onClick={this.open}>Stores</Link></li>
                                    <li className="search-nav"><Link className="search-link" onClick={this.open}>Search</Link></li>
                                    <li className="close-btn-nav"><Link to="/" className="sidebar-close-btn" onClick={this.close}>X</Link></li>
                                </ul>
                            </div>


                    
                        <div className="asoap-logo"><img src={window.images.logo}  onClick={this.close}/></div>
                                <ul className="sidebar-category-li">
                                    <div className="skin-category-slidebar">
                                        <li className="skin-category"><Link className="skin-link" onMouseEnter={this.handleHoverCategory("Skin")}  >Skin</Link></li>
                                    </div>
                                    <li className="hair-category"><Link className="hair-link">Hair</Link></li>
                                    <li className="body-category"><Link className="body-link">Body & Hand</Link></li>
                                </ul>
                         
                            </div>
                        </div>
                
            </div>
        )
    };
};


export default CategorySidebar;

{/* <li className="skin-category"><Link className="skin-link" onMouseEnter={this.handleHoverCategory("Skin")}  >Skin</Link></li> */}


{/* <li><Link onMouseEnter={this.handleHoverCategory("Skin")}>Skin</Link></li>
    <li><Link onMouseEnter={this.handleHoverCategory("Skin")}>Hair</Link></li>
    <li><Link onMouseEnter={this.handleHoverCategory("Skin")}>Body & Hand</Link></li> */}