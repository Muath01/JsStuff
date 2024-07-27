import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import React from "react";

interface iAppProps {
  email: string;
  name: string;
  userImage: string | undefined;
}

function UserNav({ email, name, userImage }: iAppProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="focus:outline-none focus:border-none border-none outline-none"
        asChild
      >
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full focus:outline-none focus:border-none border-none outline-none"
        >
          <Avatar className="h-10 w-10 focus:outline-none focus:border-none">
            <AvatarImage src={userImage} alt="User Image" />
            <AvatarFallback>{name.slice(0, 3)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 cursor-pointer"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-medium text-sm leading-none">
          {name}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs leading-none text-muted-foreground">
          {email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="cursor-pointer" />
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href="/sell">Sell Your Product</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href="/my-products">My Products</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href="/billing">Billing</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="cursor-pointer" />
        <DropdownMenuItem className="cursor-pointer" asChild>
          <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;
