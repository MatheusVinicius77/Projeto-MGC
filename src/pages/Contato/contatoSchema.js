import * as yup from "yup";

export const contatoSchema = yup.object().shape({
  email: yup.string().required("O email é obrigatório").email("Digite um email válido"),
  
});