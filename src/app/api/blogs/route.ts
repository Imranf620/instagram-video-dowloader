// app/api/blogs/route.ts
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';


export async function GET() {
    try {
        const { db } = await connectToDatabase();
        const blogs = await db.collection('blogs').find({}).toArray();
        return NextResponse.json({ blogs });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}
