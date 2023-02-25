import * as yup from "yup";

export const contatoSchema = yup.object().shape({
  email: yup.string().required("O email é obrigatório").email("Digite um email válido"),
  nome: yup.string().required("O nome é obrigatório"),
  telefone: yup.string().required("O telefone é obrigatório").min(15, "O telefone deve ter 11 dígitos"),
  data: yup.string().required("A data é obrigatória"),
  mensagem: yup.string().required("A mensagem é obrigatória").min(30, "A mensagem deve ter ao menos 30 caracteres")
});