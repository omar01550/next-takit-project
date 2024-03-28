import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getUserState(token) {


if (!token) {
   return null
}

const userDecoded = jwt.decode(token);

if (userDecoded) {
    return userDecoded
}else{
   return null;
}


}



