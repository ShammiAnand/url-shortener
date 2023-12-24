const sessionIdToUserMapping = new Map();

const setUserWithId = (id, user) => {
  sessionIdToUserMapping.set(id, user);
};

const getUserWithId = (id) => {
  return sessionIdToUserMapping.get(id);
};

module.exports = {
  setUserWithId,
  getUserWithId,
};
