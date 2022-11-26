export const useUserData = () => {
  const user = useState("user", () => ({
    username: "admin",
    password: "admin123",
  }));

  const setUser = (newUser) => {
    user.value = newUser;
  };

  return {
    user,
    setUser,
  };
};
