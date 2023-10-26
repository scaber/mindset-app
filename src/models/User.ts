export interface IUser {
    userName:string
    firstName: string
    lastName: string 
    role: ROLE
  }
  export interface LoginRequest {
    username: string
    password: string
  }
  export enum ROLE {
  ADMIN = 'admin',
  USER = 'user',
}
