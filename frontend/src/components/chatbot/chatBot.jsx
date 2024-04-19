import React from 'react';

import axios from 'axios';

function AIChatBot() {
  const config = {
    // Your Dialogflow config here
  };

  const handleUserMessage = async ({ steps, value }) => {
    const response = await axios.post('https://api.dialogflow.com/v1/query?v=20150910', {
      // Your Dialogflow request here
    }, {
      headers: {
        // Your Dialogflow headers here
      }
    });

    return response.data.result.fulfillment.speech;
  };

  const steps = [
    {
      id: '1',
      message: 'Hello! How can I help you?',
      trigger: 'userMessage'
    },
    {
      id: 'userMessage',
      user: true,
      trigger: 'reply'
    },
    {
      id: 'reply',
      asMessage: true,
      waitAction: true,
      trigger: 'userMessage'
    }
  ];

  return (
    <div>

    </div>
  );
}

export default AIChatBot;