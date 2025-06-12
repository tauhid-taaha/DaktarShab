import { Button } from "@/components/ui/button";
import { ClerkProvider,SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs/dist/types/components.server";
import Image from "next/image";

export default function Home() {
  return (
    <ClerkProvider>
    <div className="py-12">
     <h1>DaaktarKhana</h1>
     <Button>click me</Button>
    </div>
    </ClerkProvider>
  );
}
