import SearchHeader from "../components/SearchHeader/SearchHeader";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <SearchHeader />
      {children}
    </div>
  );
}
