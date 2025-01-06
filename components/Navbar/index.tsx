import { auth, signIn, signOut } from "@/lib/auth";
import { Avatar } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-4 text-white px-4 py-8">
      <nav className="flex items-center justify-between gap-5 text-white">
        <Link href="/" className="">
          <p>VENTURE FLOW</p>
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <Form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                  <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </Form>
              <Link href={`/user/${session?.id}`}>
                <Avatar>
                  <AvatarImage className="w-8 h-8 rounded-full"
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              <Form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit" className="button-classic">Login</button>
              </Form>
            </>
          )}
        </div>
      </nav>
      <div className="border-t border-gray-300 my-4"></div>

    </header>
  );
};

export default Navbar;
