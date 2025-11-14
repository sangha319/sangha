dBtn.addEventListener('click', () => {
  dateScreen.classList.add('hidden');
  
  // 기존에 보여진 채팅 숨기기
  document.querySelectorAll('.chat-container').forEach(c => c.classList.add('hidden'));
  
  // 해당 날짜 채팅 보여주기
  document.getElementById(`chat-${year}-${date.replace(/[^0-9]/g,'-')}`).classList.remove('hidden');
  
  chatScreen.classList.remove('hidden');
});
