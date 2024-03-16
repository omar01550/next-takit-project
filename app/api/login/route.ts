import { NextRequest, NextResponse } from "next/server";
import JWT from 'jsonwebtoken'


const users =[
     {
         name:"omar",
         email:"omar@gmial.com",
         password:"omar101010"
     }
]



export const POST = async (request:NextRequest) => {
const body = await request.json();


const user = users.find((user) => {
    return user.email == body.email && user.password == body.password
})
console.log();

if (user) {
    return new Response(JSON.stringify({...user,token:JWT.sign(user,"hamada_secret")}))
}else{
    return NextResponse.json({
         message:'not found user'
    },{status:404})
}


}

