import * as Styled from "./Article.style";

interface Props {
  article: AppData.Article;
}

const Article = ({ article }: Props) => {
  return (
    <Styled.Article>
      <Styled.Image src={article.image} alt="" draggable="false" />
      <Styled.Body>
        <Styled.Author>{article.author}</Styled.Author>
        <Styled.Name href="#">{article.name}</Styled.Name>
        <Styled.Excerpt>{article.excerpt}</Styled.Excerpt>
      </Styled.Body>
    </Styled.Article>
  );
};

export default Article;
