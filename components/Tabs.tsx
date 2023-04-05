import { ICategory } from "@/types";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface IPropsTypes {
  categories: ICategory[];
}
const Tabs = ({ categories }: IPropsTypes) => {
  const router = useRouter();
  //   console.log("router: ", router);

  const isActiveLink = (activeCategory: ICategory) => {
    return activeCategory.attributes.Slug === router.query.category;
  };
  const handleChange = (e: string) => {
    console.log(e);
  };
  return (
    <div className="flex justify-between">
      <ul className="flex">
        <li className="mr-2 pb-2">
          <Link href="/">Recent</Link>
        </li>

        {categories.map((category, index) => {
          console.log("category: ", category);
          return (
            <li
              className={`mr-2 pb-2 border-b-4  ${
                isActiveLink(category) ? "border-green-400 " : null
              }`}
              key={index}
            >
              <Link href={`/category/${category.attributes.Slug}`}>
                {" "}
                {category.attributes.Title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="border-b-4">
        <span className="mx-2">🔍</span>
        <input
          placeholder="Search"
          className="p-1"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Tabs;
