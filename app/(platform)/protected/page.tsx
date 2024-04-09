"use client";

import { UserButton } from "@clerk/nextjs";

const ProtectedPage = () => {
    return (
        <div>
            <UserButton />
        </div>
     )  
}
export default ProtectedPage;