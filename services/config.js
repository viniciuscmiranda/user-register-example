import axios from 'axios';
import { auth } from '~/utils';

const http = axios.create({
  baseURL: 'https://cooperativapersonal.herokuapp.com'
})

const getHeaders = async () => {
  const headers = {};

  const token = await auth.getToken();
  if (token) headers.Authorization = `Token ${token}`;

  return headers;
}

export const post = async ({ url, data }) => {
  const headers = await getHeaders();
  return http.post(url, data, { headers })
    .then(res => res.data)
    .catch(err => console.warn(err));
};

export const put = async ({ url, data, id }) => {
  const headers = await getHeaders();
  return http.put(`${url}${id}/`, data, { headers })
    .then(res => res.data)
    .catch(err => console.warn(err));
};

export const get = async ({ url, params }) => {
  const headers = await getHeaders();
  return http.get(url, { params, headers })
    .then(res => res.data)
    .catch(err => console.warn(err));
};

export const del = async ({ url, id }) => {
  const headers = await getHeaders();
  return http.delete(`${url}${id}/`, { headers })
    .then(res => res.status == 204)
    .catch(err => console.warn(err));
}

