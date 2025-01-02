const baseUrl = "http://localhost:3001";

const getToken = () => {
  return localStorage.getItem("jwt");
};

export const checkResponse = (res) => {
  if (!res.ok) throw new Error(`Error: ${res.status}`);
  return res.json();
};

export const getItems = () => {
  return fetch(`${baseUrl}/items`).then(checkResponse);
};

export const addItems = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkResponse);
};

export const deleteItems = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
};

export const addCardLike = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
};

export const removeCardLike = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
};
