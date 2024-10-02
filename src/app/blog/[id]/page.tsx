// app/blog/[id]/page.tsx
import { blogData } from "@/components/BlogsCards";
import Image from "next/image";

// Define an interface for the params
interface Params {
  id: string;
}

function SingleBlog({ params }: { params: Params }) {
  const { id } = params;

  const blogPost = blogData.find((blog) => blog.id.toString() === id);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }
  const { tags, image, title, description, date, author, content } = blogPost;
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="flex items-center justify-center">
        <div className="relative h-[500px] w-[100%]">
          {" "}
          {/* Set to 80% width */}
          <Image
            src={image}
            alt={title}
            priority
            layout="fill" // This allows the image to fill the parent div
            objectFit="cover" // Ensures the image covers the parent without distortion
            className="rounded-lg" // Optional: adds rounded corners
          />
        </div>
      </div>
      <h1 className="mt-4 text-3xl font-bold">
        {title}{" "}
        <span className="mt-1 text-sm text-gray-500">(Created at {date})</span>
      </h1>
      <p className="mt-2 text-lg">{description}</p>
      <p className="mt-1 text-sm text-gray-500">By {author}</p>
      <p className="mt-1 ">{content}</p>
      <p className="mt-1 text-sm text-gray-500"></p>
      <div>
        {tags.map((tag) => {
          return (
            <span
              className="mb-2 mr-2 rounded bg-blue-200 px-2.5 py-0.5 text-sm font-medium text-blue-800"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default SingleBlog;
