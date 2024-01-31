import crypto from 'crypto';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (salt: String, password: String) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(process.env.AUTH_SECRET).digest('hex');
};

export const get = (obj: any, path: string, defaultValue?: any) => {
  const keys = path.split('.');
  let result: any = obj;

  for (let key of keys) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }

  return result;
};