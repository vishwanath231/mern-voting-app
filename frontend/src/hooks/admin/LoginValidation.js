
const LoginValidation = (values) => {
    
    let error= {};

    //email    
    if (!values.email) {
       error.email = "Email is required!" 
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        error.email = "Email address is invalid!"
    }
    
    //password
    if (!values.password) {
        error.password = "Password is required!"
    }

    return error;

}

export default LoginValidation;
