/* eslint-disable import/prefer-default-export */

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`)
