import {useState} from 'react'
import axios from 'axios';
import { toast } from "react-toastify";

const useForm = (validate,initialRegisterValues)  => {
  const url = "http://testrich-001-site1.itempurl.com/User/Register"
   const[values, setValues] = useState({
     ...initialRegisterValues

   });

   const[errors, setErrors] = useState("")
   const [isSubmitting, setIsSubmitting] = useState(false);
   

   const handleChange = e => {
    const newData = { ...values }
    newData[e.target.name] = e.target.value
    setValues(newData)
    console.log(newData)
      //  setValues({
      //      ...values,
      //      [e.target.name]: e.target.value
      //  })
   }

   const handleSubmit = e => {
       e.preventDefault()
       axios.post(url,{
        firstname:values.firstname,
        lastname:values.lastname,
        emailAddress:values.emailAddress,
        password:values.password,
      })
      .then(res => {
         console.log(res.values)
         //toast("Thanks! You will get a mail soon");

      })
       setErrors(validate(values));
       setIsSubmitting(true);
   }
  //  useEffect(() => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
   
  //   },
  //   [errors]
  // );
   return {handleChange, values, handleSubmit, errors}
}

export default useForm;
