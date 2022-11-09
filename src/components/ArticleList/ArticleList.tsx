import * as Styled from "./ArticleList.style";
import currencyImage from "@images/image-currency.jpg";
import restaurantImage from "@images/image-restaurant.jpg";
import planeImage from "@images/image-plane.jpg";
import confettiImage from "@images/image-confetti.jpg";
import Article from "@components/Article";

const articles: AppData.Article[] = [
  {
    image: currencyImage,
    author: "Claire Robinson",
    name: "Receive money in any currency with no fees",
    excerpt:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: restaurantImage,
    author: "Wilson Hutton",
    name: "Treat yourself without worrying about money",
    excerpt:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: planeImage,
    author: "Wilson Hutton",
    name: "Take your Easybank card wherever you go",
    excerpt:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    image: confettiImage,
    author: "Claire Robinson",
    name: "Our invite-only Beta accounts are now live!",
    excerpt:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

const ArticleList = () => {
  return (
    <Styled.ArticleList>
      <Styled.Title>Latest Articles</Styled.Title>
      <Styled.List>
        {articles.map((article) => (
          <li key={article.name}>
            <Article article={article} />
          </li>
        ))}
      </Styled.List>
    </Styled.ArticleList>
  );
};

export default ArticleList;
