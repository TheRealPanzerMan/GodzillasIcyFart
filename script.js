function playFart() {
    // Замените 'fart.mp3' на ваше имя файла
    const audio = new Audio('fart.mp3');
    audio.play();
  }
  
  function callGodzilla() {
    // Замените 'call.mp3' на ваше имя файла
    const audio = new Audio('call.mp3');
    audio.play();
  
    // Переход на следующую страницу (calling.jpg)
    window.location.href = 'calling.html';
  }