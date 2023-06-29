import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { LoadingSpinner } from "./LoadingSpinner";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function withLoader(
  Element,
  fetchFunction,
  loader?: ReactElement
) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchFunction()
        .then((response) => setData(response))
        .catch(console.error);
    });

    if (!data) return <LoadingSpinner icon={loader} />;

    return <Element {...props} data={data} />;
  };
}
