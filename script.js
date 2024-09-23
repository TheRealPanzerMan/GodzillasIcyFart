function playFart() {
    // Замените 'fart.mp3' на ваше имя файла
    const audio = new Audio('fart.mp3');
    audio.play();
  }

//  Список доступных звуков
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
  
  //  Функция для воспроизведения случайного звука и перехода на следующую страницу
  function callGodzilla() {
    // Выбор случайного звука из списка
    const randomSoundIndex = Math.floor(Math.random() * soundFiles.length);
    const randomSound = soundFiles[randomSoundIndex];
  
    // Воспроизведение случайного звука
    const audio = new Audio(randomSound);
    audio.play();
  
    //  Показать   "calling-screen"   и   скрыть   "godzilla-screen"
    document.getElementById('godzilla-screen').style.display = 'none';
    document.getElementById('calling-screen').style.display = 'flex';
  
    //  Показать   текст   "GODZILLA'S   ICY   FART"   и   т.д.
    document.getElementById('calling-info').style.display = 'block';
  }