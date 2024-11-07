const baseUrl = "http://localhost:3001";

export const getItems = () => {
  return fetch(`${baseUrl}/items`).then((res) => {
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  });
};

export const addItems = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => {
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  });
};

export const deleteItems = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  });
};
