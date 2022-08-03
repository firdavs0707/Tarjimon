var elForm = document.querySelector('.form');
var elForm2 = document.querySelector('.form2');
var elInput = document.querySelector('.input1');
var elSelectLanguage = document.querySelector('.language');
var elResult = document.querySelector('.result');
var elExplain = document.querySelector('.explain');
var option1 = document.querySelector('.option1');
var elSelection = document.querySelector('.selection');
var elButton = document.querySelector('.btn');


elForm2.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if (elSelectLanguage.value == 11) {
    elExplain.textContent = 'Hafta kunlaridan birini kiriting';
    option1.textContent = 'Tilni tanlang';
    elResult.textContent = 'Tarjima shu yerda aks ettiriladi!';
    elButton.textContent = 'Tayyor';
    return;
  }else if (elSelectLanguage.value == 12) {
    elExplain.textContent = 'Введите день недели';
    option1.textContent = 'Выберите язык';
    elResult.textContent = 'Перевод будет отображаться здесь!';
    elButton.textContent = 'Готова';
    return;
  }else if (elSelectLanguage.value == 13) {
    elExplain.textContent = 'Enter the day of the week';
    option1.textContent = 'Choose language';
    elResult.textContent = 'Translation will be displayed here!';
    elButton.textContent = 'Done';
    return;
  };
})


elForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (elSelection.value == 1){
    if (elInput.value == 'Dushanba') {
      elResult.textContent = 'Dushanba';
      return;
    } else if (elInput.value == 'Seshanba') {
      elResult.textContent = 'Seshanba';
      return;
    } else if (elInput.value == 'Chorshanba') {
      elResult.textContent = 'Chorshanba';
      return;
    } else if (elInput.value == 'Payshanba') {
      elResult.textContent = 'Payshanba';
      return;
    } else if (elInput.value == 'Juma') {
      elResult.textContent = 'Juma';
      return;
    } else if (elInput.value == 'Shanba') {
      elResult.textContent = 'Shanba';
      return;
    } else if (elInput.value == 'Yakshanba') {
      elResult.textContent = 'Yakshanba';
      return;
    }return;
  } else if (elSelection.value == 2){
  if (elInput.value == 'Dushanba') {
    elResult.textContent = 'Monday';
    return;
  } else if (elInput.value == 'Seshanba') {
    elResult.textContent = 'Tuesday';
    return;
  } else if (elInput.value == 'Chorshanba') {
    elResult.textContent = 'Wednesday';
    return;
  } else if (elInput.value == 'Payshanba') {
    elResult.textContent = 'Thursday';
    return;
  } else if (elInput.value == 'Juma') {
    elResult.textContent = 'Friday';
    return;
  } else if (elInput.value == 'Shanba') {
    elResult.textContent = 'Saturday';
    return;
  } else if (elInput.value == 'Yakshanba') {
    elResult.textContent = 'Sunday';
    return;
  }return;
} else if (elSelection.value == 3){
  if (elInput.value == 'Dushanba') {
    elResult.textContent = 'Понедельник';
    return;
  } else if (elInput.value == 'Seshanba') {
    elResult.textContent = 'Вторник';
    return;
  } else if (elInput.value == 'Chorshanba') {
    elResult.textContent = 'Среда';
    return;
  } else if (elInput.value == 'Payshanba') {
    elResult.textContent = 'Четверг';
    return;
  } else if (elInput.value == 'Juma') {
    elResult.textContent = 'Пятница';
    return;
  } else if (elInput.value == 'Shanba') {
    elResult.textContent = 'Суббота';
    return;
  } else if (elInput.value == 'Yakshanba') {
    elResult.textContent = 'Воскресенье';
    return;
  }return;
}
})


