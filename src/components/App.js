import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import reactStringReplace from 'react-string-replace';

import { FIELDS } from '../constants';
import InputItem from '../containers/InputItem';
import EditView from '../containers/EditView';

require('./App.scss');

const App = ({
  essayText, fieldAnswers, fieldOrder, submitEdit, editView,
}) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = () => submitEdit();

  const styledEssayText = reactStringReplace(
    essayText,
    /\{\{(.*?)\}\}/g,
    (match, i) => (
      <span key={i} className="app--bold-text">
        {match}
      </span>
    ),
  );

  const hasEditButton = Object.keys(fieldAnswers).length === fieldOrder.length;

  return (
    <div className="app--page-container">
      <div className="app--form-container">
        {editView ? (
          <EditView />
        ) : (
          <form className="app--form-adjust" onSubmit={handleSubmit(onSubmit)}>
            <div className="app--inputs-container">
              <h1 className="app--main-header">About me</h1>

              {Object.keys(FIELDS).map((item) => (
                <InputItem
                  key={`input-item_${item}`}
                  register={register}
                  errors={errors}
                  type={item}
                  label={FIELDS[item]}
                />
              ))}
            </div>
            <div className="app--essay-container">
              <h2 className="app--sub-header">Your essay text</h2>
              <div className="app--essay-text">{styledEssayText}</div>

              {hasEditButton ? (
                <input className="app--styled-edit" type="submit" value="Edit" />
              ) : null}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

App.propTypes = {
  essayText: PropTypes.string.isRequired,
  fieldAnswers: PropTypes.objectOf(PropTypes.string).isRequired,
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitEdit: PropTypes.func.isRequired,
  editView: PropTypes.bool.isRequired,
};

export default App;
