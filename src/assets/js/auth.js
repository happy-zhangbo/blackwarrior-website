const TokenKey = 'x-access-token'
export function getToken() {
    const token = window.sessionStorage.getItem(TokenKey);
    return JSON.parse(token);
}

export function setToken(token) {
    return window.sessionStorage.setItem(TokenKey, JSON.stringify(token));
}

export function removeToken() {
    return window.sessionStorage.removeItem(TokenKey);
}