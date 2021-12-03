
const nominationValidate = (values) => {
    
    let error = {};
    var mob = /^[1-9]{1}[0-9]{9}$/;

    if (!values.profile) {
        error.profile = "Profile is required!"
    }else if (!values.profile.name.match(/.(jpg|jpeg|png)$/i)) {
        error.profile = "File type is not supported!"
    }

    if (!values.logo) {
        error.logo = "Logo is required!"
    }else if (!values.logo.name.match(/.(jpg|jpeg|png)$/i)) {
        error.logo = "File type is not supported!"
    }

    if (!values.party_name) {
        error.party_name = "Party name is required!"
    }

    if (!values.register_no) {
        error.register_no = "Register number is required!"
    }
    
    if (!values.name) {
        error.name = "Name is required!"
    }

    if (!values.dob) {
        error.dob = "Date of Birth is required!"
    }
    
    //email
    if (!values.email) {
        error.email = "Email is required!" 
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        error.email = "Email address is invalid!"
    }
    
    
    if (!values.mobile_no) {
        error.mobile_no = "Mobile number is required!"
    }else if (mob.test(values.mobile_no) === false) {
        error.mobile_no = "Please enter valid mobile number!"
    }

    if (!values.department) {
        error.department = "Department is required!"
    }

    return error;
}

export default nominationValidate;
