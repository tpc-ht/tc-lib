import react, { useState } from 'react';
type cacheContext = {
  //根据 type 缓存
  data: {
    [key: string]: {
      isReq: boolean;
      isErr: boolean;
      list: any[];
    };
  };
  setData: (key: string, list: any[]) => void;
};
const SelectCacheContext = react.createContext<cacheContext>({
  data: {},
  setData: function (key: string, list: any[]): void {
    throw new Error('Function not implemented.');
  },
});
const SelectCacheContainer = () => {
  const [data, setData] = useState<cacheContext['data']>({});
  //   const is
  const handleData = (key: string, list: any[]) => {
    if (data[key]) {
    }
  };
  return (
    <SelectCacheContext.Provider
      value={{ setData: handleData }}
    ></SelectCacheContext.Provider>
  );
};
export default SelectCacheContainer;
