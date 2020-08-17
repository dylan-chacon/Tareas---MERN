import userAxios from './axios';

const tokenAuth = token => {
    if (token) {
        userAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete userAxios.defaults.headers.common['x-auth-token'];
    }
}
 
export default tokenAuth;