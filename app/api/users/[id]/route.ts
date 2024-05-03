
import { NextResponse } from "next/server"
import fs from 'fs'
import path from "path"
import next from "next"


let user = {
    firstname:"omar",
    lastname:"medhat ali",
    email:"omar@gmail.com",
    mobile:"01550180558",
    country:"egypt",
    passport:"81989818901898"
}

export const GET = async (request,{params} ) =>{
      return NextResponse.json({user:user})
}