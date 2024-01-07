import { useEffect, useState } from "react";
import instance from "../api/instance";
import { isAxiosError } from "axios";

interface ResponseDataType {
  message: string;
  code: number;
}
const AxiosQuery = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserWithAxios = async () => {
    try {
      const { data } = await instance.get("users");
      setData(data);
    } catch (error) {
      if (isAxiosError<ResponseDataType>(error)) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUserWithAxios();
  }, []);

  if (isLoading) return <>Loading...</>;

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div className="text-4xl">AxiosQuery</div>
      <ul className="list-disc p-4">
        {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default AxiosQuery;
