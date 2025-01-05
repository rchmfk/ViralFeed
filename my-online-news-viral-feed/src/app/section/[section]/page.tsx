"use client";

import React, { useState, useEffect } from "react";
import Heading from "@/components/Heading";
import NewsList from "@/components/NewsList";
import { useParams } from "next/navigation";

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

interface CachedData {
  results: Article[];
  timestamp: number;
}

const cache: { [key: string]: CachedData } = {};

export default function SectionPage() {
  const params = useParams();
  const section = params.section;
  const sectionName = Array.isArray(section) ? section[0] : section;

  const API_URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json`;
  const apiKey = "Dvhi63kc4DEXVKWzm2IL9ySsP3wndAXy";
  const URL = `${API_URL}?api-key=${apiKey}`;

  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `section_${section}`;
      const cacheExpirationTime = 60 * 60 * 1000;
      let cachedData = cache[cacheKey];

      if (
        !cachedData ||
        Date.now() - cachedData.timestamp > cacheExpirationTime
      ) {
        try {
          const response = await fetch(URL);
          const results = await response.json();
          if (results.results) {
            cachedData = {
              results: results.results,
              timestamp: Date.now(),
            };
            cache[cacheKey] = cachedData;
            setData(results.results);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setData(cachedData.results);
      }

      setLoading(false);
    };

    fetchData();
  }, [section, URL]);

  if (loading) {
    return (
      <>
        <div className="min-h-screen flex flex-col">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500 align-center">
                      Loading...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Heading data={sectionName} />
        <NewsList data={data} />
      </div>
    </>
  );
}
