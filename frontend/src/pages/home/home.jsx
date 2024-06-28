import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageCountainer from "../../components/messages/MessageCountainer";
import useConversation from "../../../zustand/useConversation";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-[500px] w-full md:w-3/5 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div
        className={`${selectedConversation && isMobile ? "hidden" : "flex"}`}
      >
        <Sidebar />
      </div>
      <MessageCountainer />
    </div>
  );
};

export default Home;
