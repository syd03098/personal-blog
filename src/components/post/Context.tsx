import { ExtendedRecordMap } from 'notion-types';
import React, { createContext, ReactNode, useContext, useMemo } from 'react';

export interface PostContext {
  rootRecordMap: ExtendedRecordMap;
}

export const context = createContext<PostContext | null>(null);

export function PostContextProvider({
  recordMap,
  children,
}: {
  recordMap: ExtendedRecordMap;
  children: ReactNode;
}): JSX.Element {
  const value = useMemo(() => {
    return {
      rootRecordMap: recordMap,
    };
  }, [recordMap]);

  return <context.Provider value={value}>{children}</context.Provider>;
}

export const usePostContext = (): PostContext => {
  const store = useContext(context);
  if (!store) {
    throw new Error('Failed to initialize post');
  }
  return store;
};
