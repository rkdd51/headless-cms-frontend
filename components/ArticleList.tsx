import { IArticle } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";
interface IPropType {
  articles: IArticle[];
}
const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap-16 mt-10">
      {articles.map((article, i) => {
        return (
          <div key={i}>
            <span>
              <BlogCard article={article} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
