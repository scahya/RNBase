import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "./NavigationHelper";

import { useAppSelector } from "../app/hooks";

const UnProtectedRoute = ({ children }: { children: any }) => {
  const authenticatedToken = useAppSelector((state) => state.auth.auth_token);
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    if (authenticatedToken.token !== "" && authenticatedToken.token !== null) {
      // Use effect to perform navigation after the render is complete
      navigation.replace("home");
    }
  }, [authenticatedToken, navigation]);

  if (authenticatedToken.token !== "" && authenticatedToken.token !== null) {
    return null; // Render nothing while redirecting
  }

  return <>{children}</>;
};

export default UnProtectedRoute;
