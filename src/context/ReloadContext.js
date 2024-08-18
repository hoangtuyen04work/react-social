import React, { createContext, useContext, useState } from 'react';

const ReloadContext = createContext();

export const ReloadProvider = ({ children }) => {
  const [postsKey, setPostsKey] = useState(0);
  const [searchContent, setSearchContent] = useState("");
  return (
    <ReloadContext.Provider value={ {postsKey, setPostsKey ,searchContent, setSearchContent}}>
      {children}
    </ReloadContext.Provider>
  );
};

export const useReload = () => useContext(ReloadContext);
