import { useQuery } from "@tanstack/react-query";
import instance from "../api/instance";

const ReactQuery = () => {
  const fetchUserWithReactQuery = async () => {
    const response = await instance.get("users");
    return response.data;
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUserWithReactQuery,
  });

  if (isPending) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  return (
    <>
      <div className="text-4xl">ReactQuery</div>
      <ul className="list-disc p-4">
        {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ReactQuery;
