

// Educator, Student Table
const login = (username, password) => {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  return true;
}


export default {
  login,
};