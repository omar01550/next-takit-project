import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export default function MiddleWare (request:NextRequest){
     const requestPathName = request.nextUrl.pathname;
     
     
     
 const newHeaders = new Headers(request.headers);
 newHeaders.set("route",requestPathName)

    //  console.log(request.headers);
     
     return NextResponse.next({
         request:{
            headers:newHeaders
         }
     })
     
     

     
}

