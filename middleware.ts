import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { log } from "console";



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


//payment
if (requestPathName.includes("/payment")) {
      if (!user) {
           return NextResponse.redirect(new URL('/login', request.url))         
      }
}



// dashboard
// if (requestPathName.includes("/dashboard")) {
  
//    if(!user.role){
//     return NextResponse.redirect(new URL('/', request.url))         
//    }
    
  
  // if (user && user.role=='admin') {
      //     return NextResponse.redirect(new URL('/dashboard/admin', request.url))         
      // }

      // else if (user && user.role =='owner') {
      //   return NextResponse.redirect(new URL('/dashboard/owner', request.url))          
      // }
      // else{
      //   return NextResponse.redirect(new URL('/', request.url))           
      // }

      
  
// }



}