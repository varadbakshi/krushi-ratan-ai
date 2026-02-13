import React from 'react';

export const IndianGreetingProvider: React.FC = ({ children }) => {
  const getGreeting = (): string => {
    const hour = new Date().getUTCHours();
    const language = navigator.language || 'en'; // Get user's language
    let greeting = '';

    // Determine greeting based on time of day
    if (hour < 12) {
      greeting = 'सुप्रभात'; // Good morning in Hindi
    } else if (hour < 17) {
      greeting = 'नमस्ते'; // Hello in Hindi
    } else {
      greeting = 'शुभ संध्या'; // Good evening in Hindi
    }

    // You can add more languages and greetings based on the 'language' variable
    switch (language) {
      case 'en':
        greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Hello' : 'Good Evening';
        break;
      case 'ta': // Tamil
        greeting = hour < 12 ? 'காலை வணக்கம்' : hour < 17 ? 'வணக்கம்' : 'மாலை வணக்கம்';
        break;
      case 'te': // Telugu
        greeting = hour < 12 ? 'శుభోదయం' : hour < 17 ? 'నమస్కారం' : 'శుభ సాయంత్రం';
        break;
      // Add more languages as needed
      default:
        break;
    }

    return greeting;
  };

  return (
    <div>
      <h1>{getGreeting()}</h1>
      {children}
    </div>
  );
};

export default IndianGreetingProvider;