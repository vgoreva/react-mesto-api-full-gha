class Api {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
        return res.json();
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => this._getResponseData(res));
    };

    getCards(token) {
        return fetch(`${this._url}/cards`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

            .then(res => this._getResponseData(res));
    };

    setUserInfo(data, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                about: data.details,
            })
        })

            .then(res => this._getResponseData(res));
    }

    setUserAvatar(data, token) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })

            .then(res => this._getResponseData(res));
    }

    createCard(data, token) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.title,
                link: data.link,
            })
        })

            .then(res => this._getResponseData(res));
    }

    deleteCard(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

            .then(res => this._getResponseData(res));
    }

    addLike(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

            .then(res => this._getResponseData(res));
    }

    deleteLike(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}` 
            }
        })

            .then(res => this._getResponseData(res));
    }

    changeLikeCardStatus(cardId, isLiked, token) {
        if (isLiked) {
            return api.addLike(cardId, token);
        }
        return api.deleteLike(cardId, token);
    }
}

const api = new Api({
    baseUrl: 'http://127.0.0.1:27017:3000'
  })
  
export default api;