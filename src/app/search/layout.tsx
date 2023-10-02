import SearchHeader from "../components/SearchHeader/SearchHeader";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sm:px-20 sm:py-7 p-2">
      <SearchHeader />
      {children}
    </div>
  );
}
