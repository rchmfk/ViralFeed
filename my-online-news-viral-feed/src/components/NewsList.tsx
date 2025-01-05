import Link from "next/link";
import Image from "next/image";

interface Multimedia {
  url: string;
  caption: string;
  format: string;
}

interface Article {
  section: string;
  title: string;
  abstract: string;
  url: string;
  published_date: string;
  multimedia: Multimedia[];
}

interface NewsListProps {
  data: Article[];
}

const NewsList = ({ data }: NewsListProps) => {
  return (
    <>
      <div className="bg-white py-4 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
            {data.filter((article) => article.url && article.title && article.abstract).map((article, index) => (
            // {data.map((article, index) => (
              <article
                key={index}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex justify-between w-full gap-x-4 text-xs">
                  <time
                    dateTime={article.published_date}
                    className="text-gray-500"
                  >
                    {new Date(article.published_date)
                      .toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                      .toUpperCase()}
                  </time>
                  {article.section && (
                    <Link
                      href={`/section/` + article.section}
                      className="relative z-10 rounded-full bg-emerald-50 px-3 font-medium text-emerald-600 hover:bg-emerald-100"
                    >
                      <small className="font-semibold">
                        {article.section.toUpperCase()}
                      </small>
                    </Link>
                  )}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={article.url}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm/6 text-gray-600">
                    {article.abstract}
                  </p>
                  <span className="block mt-2 text-sm/6 text-emerald-600 hover:text-emerald-800">
                    <Link href={article.url}>See more...</Link>
                  </span>
                </div>
                <div className="w-full relative mt-3 flex items-center gap-x-4">
                  {article.multimedia && article.multimedia.length > 0 ? (
                    <Image
                      src={article.multimedia[0].url}
                      alt={article.multimedia[0].caption}
                      width={100}
                      height={100}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center">
                      <small className="text-gray-400">
                        No Image Available
                      </small>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
