"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

function handleSignIn() {
    gitHubSignIn();
}
 function handleSignOut() {
    firebaseSignOut();
}


return (
    <div className="bg-gradient-to-b from-black to-blue-600 min-h-screen ">
        
        <h1> Week 8 - Demo </h1>
        <p> This is a demo of the useUserAuth hook. </p>
        {!user && <button onClick={handleSignIn}>Sign in with GitHub</button>}
        {user && (
            <div>
                <p> Welcome, {user.displayName}! </p>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
        )}
        
    </div>
);
} 
