import React from 'react';
import Message from './Message';
import styled from 'styled-components';

const ConversationView = styled.ul`
    list-style-type: none;
    padding-left: 0;
    padding-top: 1em;
`;

const conversationview = function({messages, user}) {

  const bubbles = messages.map((message, index) => {
    return (
      <li key={index}>
        <Message author={message.author}
          text={message.text}
          time={message.time}
          isOwnMessage={message.author.name === user.name} />
      </li>
    );
  });
  return (
    <ConversationView>{bubbles}</ConversationView>
  );
};

export default conversationview;
