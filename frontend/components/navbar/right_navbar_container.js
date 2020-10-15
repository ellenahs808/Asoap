import { connect } from 'react-redux';
import { fetchCartItems } from '../../actions/cart_actions'
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import RightNavbar from './right_navbar';




const mapStateToProps = ({entities, session}) => {
    return {
        loggedIn: session.id,
        currentUser: entities.users[session.id]
    }
};

// const mapStateToProps = state => ({
//     currentUser: state.entities.users[state.session.id]
// })
//same as above



const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
});


export default connect(mapStateToProps, mapDispatchToProps)(RightNavbar);