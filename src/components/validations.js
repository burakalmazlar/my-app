import { object, string } from 'yup';

const validations = object({
    name: string().required("Bu alan zorunlu!"),
    email: string().required("Bu alan zorunlu!"),
    message: string().required("Bu alan zorunlu!"),

});

export default validations;