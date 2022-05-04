import axios from 'axios';
import { errorHandler } from './errorHandler';

class API {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = process.env.API_URI;
  }

  async CALL({ method, url, data = null, msg = null }) {
    try {
      // createTopLoadingDom('start');
      const getSession = await axios.post('/api/session');

      const response = await axios({
        url: this.apiUrl + url,
        method,
        data,
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${getSession.data.token}`,
        },
      });

      return response;
    } catch (error) {
      errorHandler(error.response);
      // sign.outCodeLogout(error);
      throw error.response;
    } finally {
      // createTopLoadingDom('end');
    }
  }

  GET(url: any, data: any = null, msg: any = null) {
    if (typeof url === 'object') {
      url = url.url;
      data = url.data;
      msg = url.msg;
    }

    return this.CALL({
      method: 'GET',
      url,
      data,
      msg,
    });
  }

  POST({ url, data = null, msg = null }) {
    return this.CALL({
      method: 'POST',
      url,
      data,
      msg,
    });
  }

  PUT({ url, data = null, msg = null }) {
    return this.CALL({
      method: 'PUT',
      url,
      data,
      msg,
    });
  }

  DELETE({ url, msg = null }) {
    return this.CALL({
      method: 'DELETE',
      url,
      msg,
    });
  }
}

export default new API();
