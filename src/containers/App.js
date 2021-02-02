import { connect } from 'react-redux';

import App from '../components/App';
import { submitEdit } from '../madlibs';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  submitEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
