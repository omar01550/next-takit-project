
import { NextResponse } from "next/server"

export const GET = async () => {
      return NextResponse.json({
         users:[1,2,3,4]
      })
 }