import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    //this state is made purely to update the component when the pathname changes
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocatonChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
    window.addEventListener("popstate", onLocatonChange);

    return () => {
      window.removeEventListener("popstate", onLocatonChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
