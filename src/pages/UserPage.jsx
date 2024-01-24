import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User # {userId}</h1>
    </div>
  );
};

export default UserPage;
