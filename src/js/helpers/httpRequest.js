import {Config} from '../config/config';

/**
 * Running needed CRUD operation
 * @param {number|array} formID
 * @return {Promise<array>}
 */
export const httpRequest = ({url, body = {}}) => {
    if (!url)
        return Promise.resolve([]);

    return new Promise(resolve => {
        fetch(`${Config.apiUrl}/${url}`, body)
            .then(response => response.json())
            .then(responseData => {
                return resolve(responseData);
            });
    });
};
   