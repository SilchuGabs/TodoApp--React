class AuthenticationService {

    registerSucessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false;
        return true
    }

    getUserName() {

        let user = sessionStorage.getItem('authenticatedUser');
        if (user !== null) return user;
        return null

    }
}

export default new AuthenticationService()