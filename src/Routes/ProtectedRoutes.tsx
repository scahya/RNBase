import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { NavigationProps } from "./NavigationHelper";
import { useAppSelector } from "../app/hooks";

const ProtectedRoute = ({ children }: { children: any }) => {
  const authenticatedUser = useAppSelector(
    (state) => state.auth.isAuthenticated
  );
  const authenticatedToken = useAppSelector((state) => state.auth.auth_token);
  const authenticated = false;
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    if (authenticatedToken.token === null || authenticatedToken.token === "") {
      // Use effect to perform navigation after the render is complete
      navigation.replace("login");
    }
  }, [authenticatedToken, navigation]);

  if (authenticatedToken.token === null || authenticatedToken.token === "") {
    return null; // Render nothing while redirecting
  }

  return <>{children}</>;
};

export default ProtectedRoute;
