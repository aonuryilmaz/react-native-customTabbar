import {connect} from 'react-redux';
import Home from '../components/Home';
import {
    setSize
} from '../module/home';

const mapStateToProps=(state)=>({
    size:state.home.size || {}
});

const mapActionCreators={
    setSize
    
}
export default connect(mapStateToProps,mapActionCreators)(Home);