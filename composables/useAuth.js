const useAuth = () => {
  const isAuth = useState("auth", () => ({
    status: false,
  }));

  const setAuth = (val) => {
    isAuth.value.status = val;
  };

  return {
    isAuth,
    setAuth,
  };
};

export default useAuth;
