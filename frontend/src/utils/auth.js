class Auth {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
        return res.json();
    }

    registration(data) {
        return fetch(`${this._url}/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        })
            .then(res => this._getResponseData(res));
    }

    authorization(data) {
        return fetch(`${this._url}/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        })
            .then(res => this._getResponseData(res));
    }

    getUserData(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => this._getResponseData(res));
    }
}

const auth = new Auth({
    baseUrl: 'https://goreva.nomoredomainsicu.ru',
})

export default auth