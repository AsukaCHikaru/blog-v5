import { useEffect, useState } from 'react';
export const useCustomApi = <T>(endpoint: `/api/${string}`) => {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    fetch(endpoint).then((res) =>
      res.json().then((data) => {
        setData(data);
      }),
    );
  }, [endpoint]);

  return { data };
};
