"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";
import { ArrowBigRightDashIcon, Settings, UserRound } from "lucide-react";


export function UserList() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hidden lg:flex cursor-pointer">
      <Avatar className="cursor-pointer">
 <AvatarImage src={"https://avatars.githubusercontent.com/u/107444038?v=4"} className="cursor-pointer"/>
  <AvatarFallback className=" bg-primary-100 cursor-pointer">OM</AvatarFallback>
</Avatar>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-16">
        <DropdownMenuLabel>Omar medhat</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile">
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut><UserRound/></DropdownMenuShortcut>
          </DropdownMenuItem>
           </Link>
          <DropdownMenuItem onClick={() => {
              fetch("http://localhost:3000/api/logout").then((res) => {
                  return res
              }).then((result) => {
                  console.log('result');
                  
              })
          }}>
            Log out
            <DropdownMenuShortcut><ArrowBigRightDashIcon/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut><Settings/></DropdownMenuShortcut>
          </DropdownMenuItem>
          </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
