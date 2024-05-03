import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export const POST = async (request:Request) => {

    const body = await request.json();

     delete body.password;
    const user = false;
    
    
    if (user) {
          return NextResponse.json({message:"this email already ha a account"},{status:409})
    }

    const token = jwt.sign(body,"omar_secret_key");
    return NextResponse.json({token:token},{status:200})

    


}