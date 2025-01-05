// "use client";
import React from "react";
import NewsList from "@/components/NewsList";
import Heading from "@/components/Heading";

export default async function Home() {
  const API_URL = "https://api.nytimes.com/svc/topstories/v2/home.json";
  const apiKey = "Dvhi63kc4DEXVKWzm2IL9ySsP3wndAXy";
  const URL = API_URL + "?api-key=" + apiKey;
  const response = await fetch(URL);
  const results = await response.json();
  let data = [];
  if (results.results) {
    if (results.results.length > 0) {
      data = results.results;
    }
  }
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Heading data="Top Stories"></Heading>
        <NewsList data={data} />
      </div>
    </>
  );
}
