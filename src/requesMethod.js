import axios from 'axios'

const BASE_URL = "/api";
// este token me lo tengo que traer del storage despues del login. Es el JWT
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQzYzM3MjQ2NDhjZjE2NWYzZDZhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjQ0NzY3NiwiZXhwIjoxNjQyNzA2ODc2fQ.DZqov4754jFLeAGkAzIg3TuCW0XntOVIpaUmPZfe4Ls"

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});