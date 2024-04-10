import { NextResponse } from "next/server";
import { RedirectToSignIn, authMiddleware, redirectToSignIn } from "@clerk/nextjs";
 
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth,req){
    if(auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      if(auth.orgId){
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path,req.url);
      return NextResponse.redirect(orgSelection);
      }

      if(!auth.userId && !auth.isPublicRoute) {
        return redirectToSignIn({ returnBackUrl: req.url});
      }

      if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
        const orgSelection = new URL("/select-org",req.url);
        return NextResponse.redirect(orgSelection);
      }
    }
  });
 
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]
};