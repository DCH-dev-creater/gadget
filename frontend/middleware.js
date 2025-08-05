import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request) {

    console.log(`Secret: ${SECRET}`);

    const { pathname } = request.nextUrl;

    if (pathname === '/admin/login') {
        return NextResponse.next();
    }

    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
        await jwtVerify(token, SECRET);
        return NextResponse.next();
    } catch (error) {
        console.error('JWT verification failed:', error);
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }
}

export const config = {
    matcher: ['/admin/:path*']
};