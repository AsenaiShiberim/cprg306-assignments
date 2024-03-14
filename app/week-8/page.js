"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    function handleSignIn() {
        gitHubSignIn();
    }

    function handleSignOut() {
        firebaseSignOut();
    }

   
    return (
        <div className="bg-gradient-to-b from-black to-blue-600 min-h-screen ">
             {user ? (
        <div>
          <p className="text-white">Welcome, {user.displayName} </p>
          <Link href="/week-8/shopping-list" className="text-white">Shopping List</Link>
          <br />
          <button onClick={handleSignOut} className="text-white">Logout</button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="text-white">Login with GitHub</button>
      )}
        </div>
    );
}
