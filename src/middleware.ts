import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Check if the request is for an API route
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Get the authentication token from the request headers
    const authToken = request.headers.get('Authorization');

    // If the token is missing or invalid, return an unauthorized response
    if (!authToken) {
      return new NextResponse(
        JSON.stringify({ message: 'Authentication token is missing' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Here you would typically verify the token against your authentication service
    // For example, you might decode a JWT or make a call to your backend.
    // const isValidToken = await verifyToken(authToken);

    // if (!isValidToken) {
    //   return new NextResponse(
    //     JSON.stringify({ message: 'Authentication token is invalid' }),
    //     { status: 401, headers: { 'Content-Type': 'application/json' } }
    //   );
    // }

    // If the token is present and (potentially) valid, allow the request to proceed
    return NextResponse.next();
  }

  // For non-API routes, allow the request to proceed without authentication checks
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};