import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import React from "react";
const descriptions = [
  {
    name: "Our Mission",
    description:
      "At ViralFeed, our mission is to keep you connected to the world’s most important stories in real-time. We believe that staying informed shouldn't be complicated. Our goal is to provide you with the fastest, most reliable, and engaging news content, all in one place. We strive to bring you news that matters, whether it's the latest viral trends, breaking news, or in-depth articles on the topics you care about.",
  },
  {
    name: "What We Offer",
    description:
      "ViralFeed offers an intuitive platform where you can explore the latest news and trending stories from a variety of categories.",
  },
];

const features = [
  {
    name: "Breaking News",
    description:
      "Stay updated with the most important headlines as they unfold.",
  },
  {
    name: "Viral Trends",
    description:
      "Discover the stories that are capturing the world’s attention right now.",
  },
  {
    name: "Technology",
    description:
      "Get the latest updates on innovations, gadgets, and tech breakthroughs.",
  },
  {
    name: "Business",
    description:
      "Stay informed about the stock market, startups, and the world of commerce.",
  },
  {
    name: "Entertainment",
    description:
      "From celebrity gossip to movie reviews, we cover the world of entertainment.",
  },
  {
    name: "Sports",
    description:
      "Get up-to-the-minute updates on scores, games, and sports events.",
  },
  {
    name: "Opinion & Insights",
    description:
      "Read expert opinions and thoughtful insights on key issues.",
  },
];
function About() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-500">
            Welcome to ViralFeed, your go-to platform for the latest trending news from around the world. At ViralFeed, we understand the importance of staying updated with fast, accurate information. We curate the hottest headlines from trusted sources, delivering the most relevant and viral content directly to your device.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
            {descriptions.map((feature) => (
              <div key={feature.name} className="pt-8">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </div>
          <div className="">
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* --- SUBSCRIBE --- */}
      <div className="relative isolate overflow-hidden bg-zinc-900 py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-lg text-zinc-300">
                Get weekly articles, trending news, and exclusive content
                straight to your inbox.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-zinc-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-500 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-zinc-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 text-base/7 text-zinc-400">
                  Stay ahead with trending stories and exclusive insights
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  No spam
                </dt>
                <dd className="mt-2 text-base/7 text-zinc-400">
                  Only curated content you’ll love, just the stories you care
                  about
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
