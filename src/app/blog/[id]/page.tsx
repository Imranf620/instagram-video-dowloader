"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

// Define an interface for the blog data
interface Blog {
  _id: string;
  title: string;
  desc: string;
  createdAt: string;
  author: string;
  content: string;
  image: string;
  tags: string[];
}

interface Params {
  params: {
    id: string;
  };
}

function SingleBlog({ params }: Params) {
  const { id } = params;
  const [blogPost, setBlogPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Blog post not found");
        }
        const data = await response.json();
        setBlogPost(data.blog);
      } catch (err) {
        setError("Failed to fetch the blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  const { tags, image, title, desc, createdAt, author, content } = blogPost;

  const date = new Date(createdAt).toLocaleString();

  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="flex items-center justify-center">
        <div className="relative h-[500px] w-[100%]">
          <Image
            src={image}
            alt={title}
            priority
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <h1 className="mt-4 text-3xl font-bold">
        {title}{" "}
        <span className="mt-1 text-sm text-gray-500">(Created at {date})</span>
      </h1>
      <p className="mt-2 text-lg">{desc}</p>
      <p className="mt-1 text-sm text-gray-500">By {author}</p>
      <p className="mt-4">{content}</p>
      {}
      <div className="mt-4">
        {tags.map((tag, index) => (
          <Fragment key={index}>
            {tag.split(" ").map((item, i) => (
              <span
                className="mb-2 mr-2 rounded bg-blue-200 px-2.5 py-0.5 text-sm font-medium text-blue-800"
                key={i}
              >
                {item}
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default SingleBlog;
