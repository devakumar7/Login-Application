export function onEnter(nextState, transition, callback) {
    /* const { pathname } = nextState.location
    console.log(pathname) */
    const isLoggedIn = (sessionStorage.getItem('emailId') !== null && sessionStorage.getItem('emailId') !== undefined) ? 'true' : 'false'
    if (!isLoggedIn) {
        transition('/login') //redirect to Home component
    } else {
        return callback() // go as it is.
    }
}