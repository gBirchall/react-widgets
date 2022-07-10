import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    //if command or control key is pressed
    if (e.metaKey || e.ctrlKey) {
        return;
    }
    e.preventDefault();
    //update url path when a tag is clicked
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
