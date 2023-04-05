import { IArticle } from "@/types";
import Link from "next/link";
import React from "react";
interface IPropType {
  article: IArticle;
}
const BlogCard = ({ article }: IPropType) => {
  console.log("article: ", article);
  return (
    <div className="m-2 border p-2 rounded-2xl border-black">
      <Link href="3">
        <h1 className="text-xl text-gray-600 font-bold hover:underline">
          {article.attributes.Title}
        </h1>
      </Link>
      <div>
        {/* <span>{article.attributes.author.data.attributes.firstname}</span> */}
        <span>
          {new Date(article.attributes.createdAt).toISOString().slice(0, 10)}
        </span>
        <div className="pt-6 ">
          {article.attributes.Body.length > 100
            ? article.attributes.Body.slice(0, 220) + " ..."
            : article.attributes.Body}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
