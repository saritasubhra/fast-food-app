const BASE_URL = "https://pizza-and-desserts.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "60f5c46df1mshd3e3addcfaced07p1b3bc2jsn4634f2e91b18",
    "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
  },
};

export async function getMenu(url) {
  const res = await fetch(`${BASE_URL}/${url}`, options);

  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  console.log(data);

  return data;
}

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getPizza() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error("Failed getting menu");
  const { data } = await res.json();
  return data;
}
