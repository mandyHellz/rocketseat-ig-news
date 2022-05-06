import Head from "next/head";
import { GetStaticProps } from "next";
import { GetPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de Março de 2021</time>
            <strong>
              Dark Mode com CSS — mudando a aparência do Blog de maneira simples
              e rápida
            </strong>
            <p>
              Umas das funcionalidades que está na moda em Blogs e Sites é o
              Dark Mode. Devs, em sua maioria, curtem bastante utilizar temas
              escuros, tanto na IDE quanto em outros apps.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = GetPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title", "post.content"],
      pageSize: 100,
    }
  );

  console.log(response);

  return {
    props: {},
  };
};
