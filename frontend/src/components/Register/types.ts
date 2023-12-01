export type RegisterUser = {
  email: string,
  password: string,
  passwordRep: string,
  name: string
}

export const initialValue: RegisterUser = {
  email: "",
  password: "",
  passwordRep: "",
  name: ""
}