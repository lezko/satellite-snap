import axios from 'axios';
import {store} from 'store';
import {getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage} from 'utils/localStorage';

axios.interceptors.request.use(config => {
    config.headers['Authorization'] = store.getState().user.user?.token || null;
    config.headers['Content-Type'] = 'application/json';
    // todo ssl workaround
    // config.httpAgent = new https.Agent({
    //     rejectUnauthorized: false
    // })
    return config;
});

const apiUrlStringName = 'api-url';
if (!getApiUrl()) {
    setApiUrl('http://localhost:8080');
}
export function getApiUrl() {
    return getFromLocalStorage(apiUrlStringName);
}

export function setApiUrl(url: string) {
    if (url.endsWith('/')) {
        url = url.substring(0, url.length - 1);
    }
    saveToLocalStorage(apiUrlStringName, url);
}

export function clearApiUrl() {
    removeFromLocalStorage(apiUrlStringName);
}
