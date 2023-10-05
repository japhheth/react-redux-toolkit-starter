import { FC } from "react";
import UseHomeModel from "./model/useHomeModel";

const Home: FC = () => {
  const { user, loading, setFilters } = UseHomeModel();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <p>User : {user.title}</p>
          <p>Completed: {user.completed ? "Yes" : "No"}</p>
          <button onClick={() => setFilters((prev) => prev + 1)}>
            Fetch another user
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
