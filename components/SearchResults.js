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
      <p className="space-y-6 p-2 hover:bg-slate-50 hover:shadow-sm hover:rounded-md cursor-pointer w-full">
        {result.name}
      </p>
    </Link>
  );
}
