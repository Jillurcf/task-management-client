import useAuth from "../../../Hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={user.photoURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <p>Creation Time: {user.metadata.creationTime}</p>
          <p>Last Sign in Time: {user.metadata.lastSignInTime}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
