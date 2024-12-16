import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/properties(.*)']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
export default clerkMiddleware(async (auth, req) => {
    // console.log((await auth()).userId);
    const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
    if (isAdminRoute(req) && !isAdminUser) {
        return NextResponse.redirect(new URL('/', req.url));
    }
    if (!isPublicRoute(req)) auth.protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};