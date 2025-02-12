const withAuth = (WrappedComponent) => {
    return (props) => {
      const isAuthenticated = localStorage.getItem("token") !== null;
  
      return isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in.</p>;
    };
  };
  
  // 📌 Usage
  const Profile = () => <h2>Welcome to your profile</h2>;
  
  export default withAuth(Profile);
  