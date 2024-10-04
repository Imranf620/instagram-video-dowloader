// app/api/blogs/[id]/route.ts
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        // Check if the ID is valid before querying the database
        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
        }

        const { db } = await connectToDatabase();
        const blog = await db.collection('blogs').findOne({ _id: new ObjectId(id) });

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({ blog });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch the blog' }, { status: 500 });
    }
}
