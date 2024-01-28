
export const checkValidData = (email,password) => {
    
    // const nameRegex = /^[a-zA-Z ]{2,30}$/.test(name);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!nameRegex) return "Name is not valid . Use alphabets ! "
    if(!emailRegex) return "email is not valid . please check it !."
    if(!passwordRegex) return "password is not valid . try again !"

    return null;
}
