import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy name",
    gmail: "dummy@gmail.com",
  },
});

userContext.displayName="UserContext";

export default userContext;
