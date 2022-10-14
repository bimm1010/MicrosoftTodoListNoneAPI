import {
  ADD_TEXT_INPUT,
  GET_TEXT_INPUT,
  DEL_TEXT_INPUT,
  UPDATE_TEXT_INPUT,
  GET_INDEX,
} from './constants';

const getInput = payload => {
  return {
    type: GET_TEXT_INPUT,
    payload,
  };
};

const getIndex = payload => {
  return {
    type: GET_INDEX,
    payload,
  };
};

const addInput = payload => {
  return {
    type: ADD_TEXT_INPUT,
    payload,
  };
};

const updateInput = (payload, index) => {
  return {
    type: UPDATE_TEXT_INPUT,
    payload,
    index,
  };
};

const delItem = payload => {
  return {
    type: DEL_TEXT_INPUT,
    payload,
  };
};

export {getInput, addInput, updateInput, getIndex, delItem};
