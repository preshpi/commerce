import Link from "next/link";

export default function SearchResults({ navResult }) {
  return (
    <div>
      {navResult?.map((result, id) => {
        return (
          <div key={id}>
            <Resultsearch result={result} category={result} />
          </div>
        );
      })}
    </div>
  );
}

function Resultsearch({ result, category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
    >
      <p className="space-y-6 p-1 hover:bg-slate-50 hover:shadow-sm hover:rounded-md cursor-pointer lg:w-full w-[300px]">
        {result.name}
      </p>
    </Link>
  );
}
