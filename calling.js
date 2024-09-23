
 //  Дополнительные   действия   после   завершения   "звонка"
setTimeout(callGodzilla, 1000); //  1 секунда

function callGodzilla() {
    // Список доступных звуков
    const soundFiles = [
      'sound/bigfart.mp3',
      'sound/roar.mp3',
      'sound/roar2.mp3',
      'sound/calling.mp3',
      'sound/calling2.ogg',
      'sound/baufukushima.mp3',
      'sound/baufukushima2.mp3',
      'sound/baufukushima3.mp3',
      'sound/song1.mp3',
      'sound/song2.mp3'
    ];
  
    // Выбор случайного звука из списка
    const randomSoundIndex = Math.floor(Math.random() * soundFiles.length);
    const randomSound = soundFiles[randomSoundIndex];
  
    // Воспроизведение случайного звука
    const audio = new Audio(randomSound);
    audio.play();
  
    // Переход на следующую страницу (calling.jpg)
    //window.location.href = 'calling.html';
  }