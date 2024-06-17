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
import { cookies } from "next/headers";
import { getUserState } from "@/lib/utils";
import Logout from "./logout";



let currentDate = new Date();
let day =currentDate.getDate();
let month = currentDate.getMonth();
let year= currentDate.getFullYear();
 let date = `${year}-${month+1}-${day}`
 
  



export function UserList() {
  console.log('the date in user list is '+date);
    
  const allCookies = cookies();
  const token = allCookies.get("token")?.value;

const user = getUserState(token)


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
          <Link href="/profile/87283782">
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut><UserRound/></DropdownMenuShortcut>
          </DropdownMenuItem>
           </Link>
          <Logout/> 
<Link href={'/dashboard/anlysis'}>
<DropdownMenuItem>
              Dashboard
            <DropdownMenuShortcut><Settings/></DropdownMenuShortcut>
          </DropdownMenuItem>

</Link>
          </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
