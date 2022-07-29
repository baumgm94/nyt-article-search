export default async function ArticleSearch(req, res) {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.query.term?.toString()}&api-key=DnnZwrIpel9rfmqoQ9Id5SwjjWG1gZe1`
    );

    res.status(200).json({ data: (await response.json()).response.docs });
  } catch (error) {}
}
