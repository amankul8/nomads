import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import  FormData from 'form-data';

interface IAxiosProps{
  token?: string,
  method: string,
  data?: FormData,
  url: string
};

interface IConfig{
  baseURL: string,
  method: string,
  timeout: number,
  headers:{
    'Content-Type': string,
    'Authorization'?: string 
  },
  data?: FormData 
}

const myAxios = async ({url, token, method, data}:IAxiosProps):Promise<void> =>{

  let config: IConfig = {
    baseURL: 'http://192.168.0.104:8000'.concat(url),
    method: method,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if(typeof token != 'undefined'){
    config = {...config, 
      headers: {
        ...config.headers,
        'Authorization': `Bearer ${token}`
      }
    }
  }

  if(typeof data != 'undefined'){
    config = {
      ...config, 
      data: data
    }
  }

  return await axios.request(config);
}

export default myAxios;