import React, { ReactNode } from "react";
import { Box } from "native-base";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <Box mt={100} bg="white">
      {children}
    </Box>
  );
};

export default Layout;
