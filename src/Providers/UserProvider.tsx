import React, { createContext, PropsWithChildren, useState } from "react";
import { AuthenticatedUser } from "../Types/types";

export const UserContext = createContext({
  user: null as AuthenticatedUser | null,
  handleSetUser: (user: AuthenticatedUser) => {},
  handleLogout: () => {},
});

const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<null | AuthenticatedUser>(null);

  const handleSetUser = (user: AuthenticatedUser) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };
  const context = {
    user,
    handleSetUser,
    handleLogout,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
