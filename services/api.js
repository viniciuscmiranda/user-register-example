import { post, get, put, del } from './config';
import { auth } from '~/utils';

export const Users = {
  url: '/api/users/',

  get: async function () {
    return await get({
      url: this.url,
    });
  },

  create: async function (data) {
    return await post({
      url: this.url,
      data,
    })
  },

  edit: async function ({ id, data }) {
    return await put({
      url: this.url,
      id,
      data,
    })
  },

  delete: async function (id) {
    return await del({
      url: this.url,
      id,
    })
  }
}

export const Auth = {
  url: '/api-token-auth/',

  logout: async function () {
    return await auth.deleteToken();
  },

  login: async function (data) {
    const res = await post({
      url: this.url,
      data
    });

    await auth.setToken(res?.token);
    return res;
  },
}