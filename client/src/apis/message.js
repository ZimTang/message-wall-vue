import http from '../utils/http';

export const getMessageByTag = (tag) => http.get(`/message/${tag}`);
export const getMessageAll = () => http.get('/message');
