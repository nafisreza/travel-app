
import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?:string;
  username?:string;
  img?:string;
  isBlocked?:boolean
  isLoggedIn:boolean
}

export const defaultSession:SessionData = {
  isLoggedIn:false
}

export const sessionOptions: SessionOptions ={
  password: process.env.SECRET_KEY!,
  cookieName: "test-session",
  cookieOptions:{
    httpOnly:true,
    secure: process.env.NODE_ENV === "production"
  }
}
