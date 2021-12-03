

const RegisterValidation = (values) => {
    
    let error= {};

    //username
    if (!values.username) {
        error.username = "Username is required!"
    }

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

    //Password
    if (!values.password) {
       error.password = "Password is required!" 
    }
    // else if (!values.password > 8){
    //     error.password = "Password must be at least 8 characters!"
    // }else if (!/[a-z]/.test(values.password)){
    //     error.password = "Password must contain at least one letter!"
    // }else if (!/[A-Z]/.test(values.password)) {
    //     error.password = "Password must contain at least one uppercase character!"
    // }else if (!/[0-9]/.test(values.password)) {
    //     error.password ="Password must contain at least one digit!";
    // }

    //confirm password
    if (!values.cpassword) {
       error.cpassword = "Confirm Password is required!" 
    }else if (values.password !== values.cpassword){
        error.cpassword = "Password doesn't match!"
    }
    
    return error;

}

export default RegisterValidation;
