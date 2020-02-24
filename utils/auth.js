import { AsyncStorage } from 'react-native';

export const getToken = async () => {
  // return await AsyncStorage.getItem('user-token');
  const keys = await AsyncStorage.getAllKeys()
  if (!keys.includes('user-token')) return false;

  return await AsyncStorage.getItem('user-token');
}

export const setToken = async token => {
  if (!token) return false;
  return await AsyncStorage.setItem('user-token', token);
}

export const deleteToken = async () => {
  return await AsyncStorage.removeItem('user-token');
}