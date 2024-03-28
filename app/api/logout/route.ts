import { NextResponse } from "next/server"



export const GET = async () => {
    let response = NextResponse.next()
    // Set a cookie to hide the banner
    response.cookies.set('token', "")
    // Response will have a `Set-Cookie:show-banner=false;path=/home` header
    return response;
}