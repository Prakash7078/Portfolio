import { useEffect, useState } from "react";
import axios from "axios";
import {motion} from 'framer-motion';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function gql() {
      await fetch('https://api.hashnode.com', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: `
            {
              user(username: "chandra7078") {
                publication {
                  posts() {
                    slug
                    title
                    brief
                    coverImage
                  }
                }
              }
            }
          `,}),
      }).then(response=>{return response.json()}).then(data=>{
        if (data && data.user && data.user.publication) {
          const { posts } = data.user.publication;
          setBlogs(posts);
        }
      }).catch(err=>console.log(err));
      
  
    }
    gql();
  },[]);

  return (
    <div id="#blogs" className="w-full bg-white">
      {blogs && blogs.length>0 && <div className="mx-auto py-10 max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-10 text-center">Blogs</h1>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs?.map((blog) => (
              <motion.div
              initial={{scale:0.8}}
              whileInView={{scale:1}}
              transition={{duration:1}} 
              key={blog.slug} className="rounded-md border border-black">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="h-48 w-full object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600">{blog.brief}</p>
                  <div className="mt-4">
                    <a
                      href={`https://chandra-prakash-babu.hashnode.dev/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full rounded-sm bg-stone-700 text-sm font-semibold text-white px-2 py-1.5 shadow-sm hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                    >
                      Read More{" "}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>}
    </div>
  );
};

export default Blogs;
