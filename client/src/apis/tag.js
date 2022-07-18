import http from '../utils/http';

export const getAllTag = () => http.get('/tag');
