import React, { createContext, ReactNode, useContext } from 'react';
import { ExtendedRecordMap } from 'notion-types';

export interface PostContext {
  rootRecordMap: ExtendedRecordMap;
}

export const context = createContext<PostContext | null>(null);

export const PostContextProvider = ({
  recordMap,
  children,
}: {
  recordMap: ExtendedRecordMap;
  children: ReactNode;
}): JSX.Element => {
  return (
    <context.Provider
      value={{
        rootRecordMap: recordMap,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const usePostContext = (): PostContext => {
  const store = useContext(context);
  if (!store) {
    throw new Error('Failed to initialize post');
  }
  return store;
};
