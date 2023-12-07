// Credenciales

const ON_SERVER = window.location.hostname !== 'localhost';

const enviroments = {
  prod: {
    url_api: 'https://0zx2ioarj0.execute-api.us-east-1.amazonaws.com/dev',
  },

  local : {
    url_api: 'https://0zx2ioarj0.execute-api.us-east-1.amazonaws.com/dev',
  },

};



export const environment = ON_SERVER ? enviroments.prod : enviroments.local;
