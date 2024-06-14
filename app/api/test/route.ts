import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'


export const GET = async () => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // This is not recommended for security reasons
        port:465,
        secure:true,
        auth: {
          user: 'arom57818@gmail.com', // Replace with your actual Gmail username
          pass: "1278"// **Do not replace with your actual password!**
        }
      });
      
      const mailOptions = {
        from: 'arom57818@gmail.com', // Replace with your actual sender email
        to: 'arom57818@gmail.com',
        subject: 'Test Email from Nodemailer',
        text: 'This is a test email sent using Nodemailer and Gmail (not recommended for security reasons).'
      };

      const result = await transporter.sendMail(mailOptions);
      console.log(result);
      


   
   

  
      return NextResponse.json({
         message:"done"
      })
}