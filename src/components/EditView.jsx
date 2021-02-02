import React from 'react';
import PropTypes from 'prop-types';

require('./EditView.scss');

const EditView = (
  { essayText, startOver },
) => {
  const removeBrackets = essayText && essayText.replaceAll('{{', '').replaceAll('}}', '');


  return (
    <div className="edit-view--container">
      <div className="edit-view--content-container">
        <h3 className="edit-view--title">Your essay text</h3>
        <textarea className="edit-view--textarea" defaultValue={removeBrackets} />
        <button onClick={startOver} className="edit-view--button">Start over</button>
      </div>
    </div>
  );
};

EditView.propTypes = {
  essayText: PropTypes.string.isRequired,
  startOver: PropTypes.func.isRequired,
};

export default EditView;
