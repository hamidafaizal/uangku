const userStates = new Map();

function setState(chatId, state) {
  userStates.set(chatId, state);
}

function getState(chatId) {
  return userStates.get(chatId);
}

function clearState(chatId) {
  userStates.delete(chatId);
}

module.exports = {
  setState,
  getState,
  clearState
};