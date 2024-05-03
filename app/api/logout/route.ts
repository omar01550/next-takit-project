import { cookies } from "next/headers"
import { NextResponse } from "next/server"



export const POST = async (request:Request) => {

  return NextResponse.redirect('http://localhost:3000/train',{status:302});



}