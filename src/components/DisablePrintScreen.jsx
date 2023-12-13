import React, { useEffect } from "react";

const DisablePrintScreen = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "PrintScreen") {
        event.preventDefault(); // Prevent the default behavior
        // Optionally, you can show a custom message or perform any other action.
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div></div>;
};

export default DisablePrintScreen;
