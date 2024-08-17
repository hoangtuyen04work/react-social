import React, { createContext, useContext, useState } from 'react';

const ReloadContext = createContext();

export const ReloadProvider = ({ children }) => {
  const [postsKey, setPostsKey] = useState(0);

  return (
    <ReloadContext.Provider value={{ postsKey, setPostsKey }}>
      {children}
    </ReloadContext.Provider>
  );
};

export const useReload = () => useContext(ReloadContext);
