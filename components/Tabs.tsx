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
  return (
    <div className="flex justify-between border-b-4">
      <ul className="flex">
        <li className="mr-2 pb-2 border-b-4">
          <Link href="#">Recent</Link>
        </li>

        {categories.map((category, index) => {
          return (
            <li className="mr-2 pb-2 border-b-4" key={index}>
              <Link href="#"> {category.attributes.Title}</Link>
            </li>
          );
        })}
      </ul>
      <div>Search Bar</div>
    </div>
  );
};

export default Tabs;
