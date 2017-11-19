import request from 'superagent';

function ajax(url, data) {
    return new Promise((resolve, reject) => {
        request
            .get(url)
            .send(data || {})
            .end((error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
    });
}

function post(url, data) {
    return new Promise((resolve, reject) => {
        request
            .post(url)
            .send(data || {})
            .end((error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
    });
}

function postWithJSON(url, data) {
    console.log(data); // eslint-disable-line no-console
    return new Promise((resolve, reject) => {
        request
            .post(url)
            .send(data || {})
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .end((error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
    });
}

function get(url, query) {
    return new Promise((resolve, reject) => {
        request
            .get(url)
            .query(query || {})
            .end((error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
    });
}

function del(url, query) {
    return new Promise((resolve, reject) => {
        request
            .delete(url)
            .query(query || {})
            .end((error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
    });
}

export default ajax;
export {
    ajax,
    post,
    postWithJSON,
    get,
    del
};

