import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export default function MiddleWare (request:NextRequest){
     
const requestPathName = request.nextUrl.pathname;
const allCookies = cookies();
const userToken = allCookies.get("token")
 if(requestPathName.includes("login") || requestPathName.includes("/signup")){
     if (userToken) {
        return NextResponse.redirect(new URL('/', request.url))
    }
     
}
}
// last middleware

//const requestPathName = request.nextUrl.pathname;
     
     
     
// //  const newHeaders = new Headers(request.headers);
// //  newHeaders.set("route",requestPathName)

//     //  console.log(request.headers);
     
//     //  return NextResponse.next({
//     //      request:{
//     //         headers:newHeaders
//     //      }
//     //  })
     
  