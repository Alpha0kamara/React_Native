import React, { createContext, useEffect } from "react";
import { Profile, Tweet } from "../types";
import { useState } from "react";

export interface DataContext {
  tweets: Tweet[];
  profiles: Profile[];
  loading: boolean,
  loadData: () => void
}
export const DataContext = createContext<DataContext>({ tweets: [], profiles: [] , loading: false, loadData: () => {} });

export default function DataProvider({ children }: { children: React.ReactNode }) {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false)

  async function loadDate() {
    setLoading(true);
    let response = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/profiles");
    let profiles: Profile[] = await response.json();
    response = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets");
    let tweets: Tweet[] = await response.json();
    tweets = tweets.map((tweet) => {
      tweet.profile = profiles.find((profil) => profil.handle === tweet.handle);
      return tweet;
    })
    setProfiles(profiles)
    setTweets(tweets);
    setLoading(false);

  }
  useEffect(() => {
    loadDate();
  }, [])

  return (
    <DataContext.Provider value={{ tweets: tweets, profiles: profiles, loadData: loadDate, loading:loading}}>
      {children}
    </DataContext.Provider>
  )
}