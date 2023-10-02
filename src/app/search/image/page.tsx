import ResultsImage from "@/app/components/ResultsImage/ResultsImage";

const ImageResultsPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const res =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.query}&searchType=image
`);

  if (!res.ok) {
    throw new Error("Server error");
  }

  const data = await res.json();

  return <div>{data && <ResultsImage res={data} />}</div>;
};

export default ImageResultsPage;
