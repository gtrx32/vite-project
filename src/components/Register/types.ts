export type RegisterUser = {
  email: string,
  password: string,
  name: string
}

export const initialValue: RegisterUser = {
  email: "",
  password: "",
  name: ""
}