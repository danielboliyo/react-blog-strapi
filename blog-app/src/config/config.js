import axios from 'axios';

const token = c15e243f484c721bdbe3441e32a8bca0acefb1b8fac30bc0fedad48fab067518be9a3c042405e1aa9c4d194b9ed53735d9f3280630d55c82c3dc7a82e4a0958f6599950b7095956aacb3ea491fb425b948ed1ebbefd3190f94a444546ba91c0f5a968a01f6b1303e99ce7a5f283f16717fb9057acb71342e0561710261b5de4c;

const config = {
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
};

export const instance = axios.create(config);
