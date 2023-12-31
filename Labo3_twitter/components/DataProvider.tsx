import React, { createContext, useEffect } from "react";
import { Profile, Tweet } from "../types";
import { useState } from "react";

export interface DataContext{
    tweets: Tweet[];
    profiles: Profile[];
}
export const DataContext = createContext<DataContext>({tweets:[], profiles: []});

export default function DataProvider({children}: {children: React.ReactNode}){
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [profiles, setProfiles] = useState<Profile[]>([]);
  
    async function loadDate() {
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
  
    }
    useEffect(() => {
      loadDate();
    }, [])
  
    return(
        <DataContext.Provider value={{tweets: tweets, profiles:profiles}}>
        {children}
        </DataContext.Provider>
    )
}