import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isApiRoute = createRouteMatcher(['/api(.*)', '/trpc(.*)', '/dashboard(.*)']);

export default clerkMiddleware((auth, request) => {
  if (isApiRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
