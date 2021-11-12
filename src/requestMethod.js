import axios from "axios";

const BASE_URL = "http://localhost:5000/";
//const TOKEN = localStorage.getItem("token")
//  ? localStorage.getItem("token").split("")[1]
//  : null;
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsInVzZXJuYW1lIjoiYWRtaW4iLCJpc2FkbWluIjoxLCJpYXQiOjE2MzY1NTIzNjcsImV4cCI6MTYzNjYzODc2N30.ei8a6Novict_JcbeQhAwXx6xO3z33M6ZfCZVVxb_qdM';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
