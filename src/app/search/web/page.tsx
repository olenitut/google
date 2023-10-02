import ResultsWeb from "@/app/components/ResultsWeb/ResultsWeb";

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
  image: {
    height: number;
    width: number;
    byteSize: number;
    thumbnailLink: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
    contextLink: string;
  };
}

export interface IRes {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  queries: { request: []; nextPage: [] };
  context: { title: string };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  items: ISearchItem[];
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const res =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.query}
  `);

  if (!res.ok) {
    throw new Error("Server error");
  }

  const data = await res.json();

  return <div>{data && <ResultsWeb res={data} />}</div>;
};

export default SearchPage;
