import { FIELD_NAMES } from './constants';
import getTextTemplates from './helpers';

// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_EDIT = 'MADLIBS.SUBMIT_EDIT';
export const START_OVER = 'MADLIBS.START_OVER';
export const ON_CHANGE_TEXT = 'MADLIBS.ON_CHANGE_TEXT';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.music,
    FIELD_NAMES.bar,
  ],
  fieldAnswers: {},
  fieldResponses: {},
  essayText: '',
  editView: false,
};

// Reducer
// ----------------------------------------------------------------------------

const subReducer = (state, action) => ({
  ...state,
  ...action,
});

const formatEssayText = (state, type, text) => {
  const { fieldOrder, fieldResponses } = state;

  const orderValues = fieldOrder
    .map((item) => {
      if (item === type) return text;
      return fieldResponses[item];
    })
    .filter((i) => i);

  return orderValues && orderValues.join(' ');
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_EDIT: {
      return {
        ...state,
        editView: true,
      };
    }

    case START_OVER: {
      return {
        ...INITIAL_STATE,
      };
    }

    case ON_CHANGE_TEXT: {
      const getChangeType = action.payload.type;
      const getChangevalue = action.payload.value;

      // checks if there was a text change from previous state.
      if (
        state.fieldAnswers
        && state.fieldAnswers[getChangeType] === getChangevalue
      ) {
        return {
          ...state,
        };
      }

      const testTemplate = getTextTemplates(getChangeType);
      const randomlySelectedTemplate = testTemplate[
        Math.floor(Math.random() * testTemplate.length)
      ]
        .replace('$answer', `{{${getChangevalue}}}`);

      const essayText = formatEssayText(
        state,
        getChangeType,
        randomlySelectedTemplate,
      );

      return {
        ...state,
        fieldAnswers: subReducer(state.fieldAnswers, {
          [getChangeType]: getChangevalue,
        }),
        fieldResponses: subReducer(state.fieldResponses, {
          [getChangeType]: randomlySelectedTemplate,
        }),
        essayText,
      };
    }

    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export function submitEdit() {
  return { type: SUBMIT_EDIT };
}

export function startOver() {
  return { type: START_OVER };
}

export function onChangeText(val, type) {
  return { type: ON_CHANGE_TEXT, payload: { value: val, type } };
}
