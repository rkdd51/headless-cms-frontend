import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { fetchArticle, fetchCategories } from "../http/index";
import { IArticle, ICategory, ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import Tabs from "@/components/Tabs";
import ArticleList from "@/components/ArticleList";

interface IPropsTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  };
}

const Home: NextPage<IPropsTypes> = ({ categories, articles }: IPropsTypes) => {
  console.log("props: ", categories);
  // console.log(process.env.NEXT_PUBLIC_API_BASE_URL, "process.env.API_BASE_URL");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={categories.items} />
      <ArticleList articles={articles.items} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // Articles
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticle();
  //Categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();
  // console.log("categories: ", categories);

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};
