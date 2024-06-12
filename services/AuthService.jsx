import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";


export async function login(credentials) {
  const { data } = await axios.post("/login", credentials);
  await setToken(data.token);
}

export async function register(credentials) {
  const { data } = await axios.post("/register", credentials);
  await setToken(data.token);
}


export async function loadUser(credentials) {
  const token = await getToken();

  const { data: user } = await axios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return user;
}
