export const register = ({ name, avatar, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(() => {
    return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
  });
};

export const authorization = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(() => {
    return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
  });
};
