export const checkValidData = (userName, email, password, isSignIn) => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const validUserName = /^[a-zA-Z0-9]+$/.test(userName)

    if (!isSignIn) {
        if(!validUserName) {
            return "Username is not valid"
        }
        if(!validEmail) {
            return "Email is not valid"
        }
    
        if(!validPassword) {
            return "Password is not valid"
        }
    }
    else {
        if(!validEmail) {
            return "Email is not valid"
        }
    
        if(!validPassword) {
            return "Password is not valid"
        }
    }

    return null;
}