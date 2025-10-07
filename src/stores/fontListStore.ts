import { createGlobalStore } from 'hox';
import { useEffect, useState } from 'react';
import { isArray, isString } from 'lodash';

const [useFontListStore] = createGlobalStore(() => {
  const localStorageFontListJson = localStorage.getItem('font_list');
  const getLocalStorageFontList = () => {
    if (localStorageFontListJson) {
      try {
        const local = JSON.parse(localStorageFontListJson);
        if (isArray(local) && (local as unknown[]).every(isString)) {
          return local as string[];
        } else {
          return null;
        }
      } catch {
        return null;
      }
    } else {
      return null;
    }
  };
  const localStorageFontList = getLocalStorageFontList();
  const [fontList, setFontList] = useState<string[] | null>(
    localStorageFontList
  );
  useEffect(() => {
    localStorage.setItem('font_list', JSON.stringify(fontList));
  }, [fontList]);
  return {
    fontList,
    setFontList,
  };
});

export default useFontListStore;
