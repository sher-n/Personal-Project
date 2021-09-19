

function setToken(token) {
    localStorage.setItem("ACCESS TOKEN", token)
}

function getToken() {
    return localStorage.getItem("ACCESS TOKEN")
}
function removeToken() {
    localStorage.removeItem("ACCESS TOKEN")
}

function getRole() {
    if(getToken()) {
        return "user"
    }
    return "guest"
}


export default {
    setToken,
    getToken,
    removeToken,
    getRole
}