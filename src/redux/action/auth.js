

import UserService from "../services/userService";

export const login = (username, password) => () => {
  return UserService.login(username, password);
};