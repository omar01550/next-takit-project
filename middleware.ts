import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'



export default function MiddleWare (request:NextRequest){
     
const requestPathName = request.nextUrl.pathname;
const allCookies = cookies();
const token = allCookies.get("token")?.value

const user = jwt.decode(token);
  
// login signup 
if (requestPathName.includes("/login")||requestPathName.includes("/signup")) {
    if (user) {
          return NextResponse.redirect(new URL('/', request.url))         
    }        
}

// dashboard
if (requestPathName.includes("/dashboard")) {
      if (!(user && user.isAdmin)) {
          return NextResponse.redirect(new URL('/', request.url))         
      }
      
  
}



}