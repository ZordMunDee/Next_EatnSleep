import { TextAlignStart } from "lucide-react";
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
import { Button } from "../ui/button";
import UserIcon from "./Usericon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLinks from "./SignOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUp, SignUpButton } from "@clerk/nextjs";

const DropdownLisMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <TextAlignStart />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

      {/* ล็อคเอ้าแล้ว */}
      <SignedOut>
        <DropdownMenuItem>
          <SignInButton mode="modal">
            <button>Login</button>
          </SignInButton>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignUpButton mode="modal">
            <button>Register</button>
          </SignUpButton>
        </DropdownMenuItem>
      </SignedOut>
      
      
      {/* ล็อคอินแล้ว */}
      <SignedIn>
        {links.map((item, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutLinks />
        </DropdownMenuItem>
      </SignedIn>

        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownLisMenu;
