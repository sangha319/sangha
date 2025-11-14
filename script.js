window.onload = function() {
  const firstMessage = document.querySelector('.chat-container .message');
  if (firstMessage) {
    firstMessage.scrollIntoView({ block: 'start' });
  }
};
