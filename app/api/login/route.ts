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



if (body.email == "omar@gmail.com" && body.password == "omar101010") {
    return new Response(JSON.stringify({...users[0],token:JWT.sign({...body,name:"ali",role:"admin"},"hamada_secret")}))
}else if(body==null){
    return NextResponse.json({
         message:'not found user'
    },{status:404})
}else{
    return NextResponse.json({
        message:'internal server eror'
   },{status:500})

}


}

