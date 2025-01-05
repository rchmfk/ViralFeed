interface HeadingProps {
  data: string;
}

const Heading = ({ data }: HeadingProps) => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="mt-8 text-2xl/8 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                {data.toUpperCase()}
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  Never Miss a Trend: Your Daily Feed of Viral News
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
