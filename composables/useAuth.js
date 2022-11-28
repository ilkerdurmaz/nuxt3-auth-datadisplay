const useAuth = () => {
  const cookie = useCookie("authCookie");

  const isAuth = useState("auth", () => ({
    status: false,
  }));

  const setAuth = (val) => {
    isAuth.value.status = val;
  };

  if (cookie.value) {
    isAuth.value.status = true;
  } else {
    isAuth.value.status = false;
  }

  return {
    isAuth,
    setAuth,
  };
};

export default useAuth;
