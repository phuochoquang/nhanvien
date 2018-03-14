//react redux
import { connect } from 'react-redux';

//componet
import HomeComponent from '../components/home/homeComponent';

// action
import { FetchProductAction, FetchMoreProductAction } from "../actions/actionProduct";

const mapStateToProps = (state) => {
    return {
        product: state.product.product,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProduct: () => {
            dispatch(FetchProductAction())
        },
        onFetchMoreProduct: (page) => {
            dispatch(FetchMoreProductAction(page))
        },
    }
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;