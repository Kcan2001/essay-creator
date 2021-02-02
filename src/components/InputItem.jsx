import React from 'react';
import PropTypes from 'prop-types';

require('./InputItem.scss');

const InputItem = (
  {
    label, type, errors, register, onChangeText,
  },
) => (
  <div className="input-item--container">
    <p className="input-item--label-text">{label}</p>
    <input
      name={type}
      onBlur={(event) => onChangeText(event.target.value, type)}
      ref={register({ required: true })}
      className="input-item--bar"
      type="text"
    />
    <p className="input-item--error-text">{errors[type] && `${type} is required`}</p>
  </div>
);

InputItem.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default InputItem;
