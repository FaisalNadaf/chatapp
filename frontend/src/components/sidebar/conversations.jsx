import React from "react";
import Conversation from "./conversation";
import useGetConversations from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation,idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
       null
      )}
    </div>
  );
};

export default Conversations;