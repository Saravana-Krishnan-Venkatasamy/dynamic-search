import axios from 'axios';
import {__BASE_URL__,__KEY__, __DEFAULT_PAGINATION__} from './constants'

const instance = axios.create({
    baseURL: __BASE_URL__,   
});

export default {
    getData: (query,cancelToken,pageNo=__DEFAULT_PAGINATION__) =>
    instance({     
        'method':'GET',
        'url':'/api',
        'cancelToken':cancelToken,
        'params': {
            'key':__KEY__,
            'q':query,
            'page':pageNo
        },
    }),
    postData: () =>
    instance({
        'method': 'POST',
        'url':'/api',
        'data': {
            'item1':'data1',
            'item2':'item2'
        },
        'headers': {
            'content-type':'application/json'  // override instance defaults
        }
    })
}
