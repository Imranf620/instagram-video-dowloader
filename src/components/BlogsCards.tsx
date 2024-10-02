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

// Sample blog data
export const blogData = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Explore the latest trends in web development for 2024.",
    image: "/images/dev_2.jpg",
    author: "John Doe",
    date: "2024-01-15",
    content: `As we look ahead to 2024, the future of web development promises to be exciting. With the advent of new technologies and frameworks, developers will have more tools at their disposal than ever before. Key trends include increased use of AI and machine learning, a shift toward serverless architecture, and greater emphasis on performance and accessibility.`,
    tags: ["Web Development", "Future", "Trends"],
  },
  {
    id: 2,
    title: "Building Responsive UIs with Tailwind CSS",
    description:
      "Learn how to make responsive and beautiful interfaces using Tailwind CSS.",
    image: "/images/dev_3.jpg",
    author: "Jane Smith",
    date: "2024-02-20",
    content: `Tailwind CSS is a utility-first CSS framework that allows developers to create responsive and visually appealing interfaces quickly. This article covers the basics of Tailwind CSS, including its utility classes, how to customize your styles, and best practices for creating responsive designs that look great on all devices.`,
    tags: ["Tailwind CSS", "UI Design", "Responsive Design"],
  },
  {
    id: 3,
    title: "Understanding Next.js and Server-Side Rendering",
    description: "A deep dive into server-side rendering with Next.js.",
    image: "/images/dev_4.jpg",
    author: "Mike Ross",
    date: "2024-03-05",
    content: `Next.js is a powerful framework for React that enables server-side rendering and static site generation. This article explores the core concepts of Next.js, including its routing mechanism, API routes, and how to implement server-side rendering for improved performance and SEO. Learn how to get started with Next.js and create fast, optimized web applications.`,
    tags: ["Next.js", "React", "Server-Side Rendering"],
  },
  {
    id: 4,
    title: "Optimizing Performance in React Applications",
    description: "Techniques to improve performance in large-scale React apps.",
    image: "/images/dev_5.jpg",
    author: "Emily Clark",
    date: "2024-04-10",
    content: `In this article, we will discuss various techniques to optimize performance in React applications. From lazy loading components to using React.memo and optimizing state management, these strategies will help you build fast and responsive applications that provide a better user experience.`,
    tags: ["React", "Performance", "Optimization"],
  },
  {
    id: 5,
    title: "An Introduction to TypeScript for React Developers",
    description: "Learn how TypeScript can improve your React applications.",
    image: "/images/dev_img.jpg",
    author: "Sarah Johnson",
    date: "2024-05-12",
    content: `TypeScript is a typed superset of JavaScript that can enhance the development experience in React applications. This article introduces TypeScript, explains its benefits for type safety, and provides practical examples of how to integrate TypeScript into your existing React projects.`,
    tags: ["TypeScript", "React", "JavaScript"],
  },
  {
    id: 6,
    title: "The Importance of Accessibility in Web Development",
    description: "Why accessibility should be a priority for developers.",
    image: "/images/dev_2.jpg",
    author: "David Brown",
    date: "2024-06-15",
    content: `Accessibility in web development is crucial for ensuring that all users, regardless of their abilities, can interact with your applications. This article discusses the key principles of accessibility, common challenges faced by developers, and best practices for making your web applications more inclusive.`,
    tags: ["Accessibility", "Web Development", "Inclusivity"],
  },
  {
    id: 7,
    title: "Using GraphQL with React",
    description: "A guide to integrating GraphQL with React applications.",
    image: "/images/dev_3.jpg",
    author: "Laura White",
    date: "2024-07-20",
    content: `GraphQL is a query language for APIs that provides a more efficient and flexible way to interact with your data. This article covers the basics of GraphQL, how to set up a GraphQL server, and how to use Apollo Client to integrate GraphQL with your React applications. Learn how to fetch, cache, and manage your data effectively with GraphQL.`,
    tags: ["GraphQL", "React", "API"],
  },
  {
    id: 8,
    title: "Exploring the JAMstack Architecture",
    description:
      "Understanding the benefits of JAMstack for modern web development.",
    image: "/images/dev_5.jpg",
    author: "Michael Green",
    date: "2024-08-25",
    content: `The JAMstack architecture is revolutionizing the way we build modern web applications. By decoupling the frontend and backend, JAMstack allows for improved performance, security, and scalability. This article explores the principles of JAMstack, its benefits, and how to get started with building JAMstack applications.`,
    tags: ["JAMstack", "Web Development", "Architecture"],
  },
];

// Blog Card Component
export function BlogsCards() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <Card
              key={blog.id}
              className="flex h-full flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader className="flex-grow">
                <div className="h-40 w-full">
                  <Image
                    src={blog.image}
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
                <p>{blog.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By {blog.author}</span>
                <Link href={`/blog/${blog.id}`}>
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
