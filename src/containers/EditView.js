import { connect } from 'react-redux';
import { startOver } from '../madlibs';

import EditView from '../components/EditView';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  startOver,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditView);
