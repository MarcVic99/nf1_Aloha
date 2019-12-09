export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = key => {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key) || "{}");
  }
};

export const TOKEN_KEY = "TOKEN_KEY";

export const saveToken = token => {
  saveInLocalStorage(TOKEN_KEY, token);
};

export const getToken = () => {
  return getFromLocalStorage(TOKEN_KEY);
};
