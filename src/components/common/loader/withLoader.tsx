import { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function withLoader(Element, fetchFunction) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      delay(10000).then(() => {
        fetchFunction()
          .then((response) => setData(response))
          .catch(console.error);
      }, []);
    });

    if (!data) return <LoadingSpinner />;

    return <Element {...props} data={data} />;
  };
}
