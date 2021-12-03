
const LoginValidation = (values) => {
    
    let error= {};

    // register number
    if (!values.register_no) {
        error.register_no = "Register number is required!"
    }else if(values.register_no.length !== 8){
        error.register_no = "Register number is invalid & length is 8"
    }

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
