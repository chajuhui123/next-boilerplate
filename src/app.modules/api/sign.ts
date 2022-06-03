import axios from 'axios';

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

class Sign {
  async signin(data) {
    const res = await axios.post('/api/signin', { data }, config);

    return res.data;
  }

  async in(data) {
    try {
      const res = await axios.post(
        process.env.MOMENTO_ADMIN_API_URI + '/accounts/sign-in',
        {
          ...data.values,
        },
        config
      );

      return res;
    } catch (e) {
      return {
        data: {
          error: true,
        },
      };
    }
  }

  ing(data) {
    return axios.get(process.env.MOMENTO_ADMIN_API_URI + '/loadUser', {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${data.token}`,
      },
    });
  }

  async outCodeLogout(error) {
    if (
      error.toString().includes('code 401') ||
      error.toString().includes('code 403')
    ) {
      console.log('outCodeLogout');
      const { data } = await axios.post('/api/signout');
      if (data) location.href = '/';
    }
  }

  async sessionOut() {
    console.log('sessionOut');
    const { data } = await axios.post('/api/signout');
    if (data) location.href = '/sign';
  }
}

export default new Sign();
