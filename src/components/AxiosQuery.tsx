import { useEffect, useState } from "react";

const AxiosQuery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {}, []);

  return <div>AxiosQuery</div>;
};

export default AxiosQuery;
