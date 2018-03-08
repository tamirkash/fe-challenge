import { connect } from 'react-redux';
import Homepage from "../Homepage";
import {logout} from "../../../reducers/user/actions";

const mapStateToProps = state => {
    return {
        username: state.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);