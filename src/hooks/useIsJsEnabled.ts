import { useEffect, useState } from "react";

function useIsJsEnabled() {
  const [isJsEnabled, setIsJsEnabled] = useState(false);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  return isJsEnabled;
}

export default useIsJsEnabled;
