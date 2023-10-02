interface ISearchItem {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: [];
    periodical: [];
    metatags: [];
    cse_image: [];
    scholarlyarticle: [];
    listitem: [];
  };
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const res =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.query}
  `);
  const data = await res.json();

  console.log(data.items);

  return (
    <div>
      {data && data.items.map((el: ISearchItem) => <h1>{el.title}</h1>)}
    </div>
  );
};

export default SearchPage;
