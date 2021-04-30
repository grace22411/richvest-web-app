
export default function validateInfo(values){
    let errors = {};

    if(!values.fullName){
        errors.fullName= "Fullname required.."
    }

    if(!values.email){
        errors.email= "Email required"
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid..';
      }

      if(!values.password){
        errors.password= "password required"
    }else if (values.password.length < 8) {
        errors.email = 'Minimum of 8 characters and should contain letters and numbers' ;
    }

    return errors;
}