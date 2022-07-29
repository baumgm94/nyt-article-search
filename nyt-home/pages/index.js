import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import SearchForm from "./SearchForm";
//import SearchForm from "./SearchForm.";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`/api?term=${term}`);
        const articles = (await response.json()).data;
        console.log("res", response);
        setArticles(articles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, [term]);

  return (
    <>
      <div className="showcase">
        <div className="overlay">
          <h1 className="text-4xl font-bold text-white text-center mb-4 mt-5 lg:text-6xl capitalize">
            Viewing articles about {term}
          </h1>
          <SearchForm searchText={(text) => setTerm(text)} />
        </div>
      </div>
      {isLoading ? (
        <h1 className="text-center mt-20 font-bold text-6xl">Loading .....</h1>
      ) : (
        <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
          {articles.map((article) => {
            const {
              abstract,
              headline: { main },
              byline: { original },
              lead_paragraph,
              news_desk,
              section_name,
              web_url,
              _id,
              word_count,
            } = article;

            return (
              <article
                className="bg-white px-5 py-10 rounded-lg lg:w-9/12 lg:mx-auto"
                key={_id}
              >
                <h2 className="text-2xl font-bold mb-5 lg:text-2xl">{main}</h2>
                <p className="">{abstract}</p>
                <p className="">{lead_paragraph}</p>

                <ul className="my-4">
                  <li>{original}</li>
                  <li>
                    <span className="font-bold">News Desk:</span> {news_desk}
                  </li>
                  <li>
                    <span className="font-bold">Section:</span> {section_name}
                  </li>
                  <li>
                    <span className="font-bold">Word Count:</span> {word_count}
                  </li>
                </ul>
                <a className="underline" href={web_url}>
                  Web Resource
                </a>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
}
