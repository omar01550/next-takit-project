import { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';


export const options = NextAuthOptions({
       secret:"hamada",
       providers:[
         GithubProvider({
             clientId:process.env.github_client_id,
             clientSecret:process.env.github_sekret_key
         })
       ]
})


