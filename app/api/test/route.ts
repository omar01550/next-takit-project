import next from "next"
import { NextResponse } from "next/server"




export const GET =async (request) => {
    return NextResponse.redirect(new URL("https://facebook.com",request.url))
}