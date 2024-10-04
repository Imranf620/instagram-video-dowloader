"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "./Loader";

// Blog Card Component
export function BlogsCards() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card
              key={blog._id} // Use _id from MongoDB
              className="flex h-full flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader className="flex-grow">
                <div className="h-40 w-full">
                  <Image
                    src={blog.image} // Use the image field from MongoDB
                    alt={blog.title}
                    width={400}
                    height={200}
                    priority
                    className="h-full w-full rounded-t-lg object-cover"
                  />
                </div>
                <CardTitle className="mt-4 text-2xl">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-gray-700">
                <p className="line-clamp-3">{blog.desc}</p>{" "}
                <Link href={`/blog/${blog._id}`}>
                  {" "}
                  <u>Read More</u>
                </Link>
                {/* Use the 'desc' field for the description */}
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By {blog.author}</span>
                <Link href={`/blog/${blog._id}`}>
                  {" "}
                  {/* Use _id for the link */}
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsCards;
