import { auth, signIn, signOut } from "@/lib/auth";
import Form from "next/form";
import Link from "next/link";

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
              <Link href="/create">
                <span>Create</span>
              </Link>
              <Form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </Form>
              <Link href={`/user/${session?.id}`}>
                <span>{session.user.name}</span>
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
