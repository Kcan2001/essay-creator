import { connect } from 'react-redux';
import { onChangeText } from '../madlibs';

import InputItem from '../components/InputItem';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  onChangeText,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);
