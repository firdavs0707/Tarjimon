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
    } else if (elInput.value == 'Monday') {
      elResult.textContent = 'Dushanba';
      return;
    } else if (elInput.value == 'Tuesday') {
      elResult.textContent = 'Seshanba';
      return;
    } else if (elInput.value == 'Wednesday') {
      elResult.textContent = 'Chorshanba';
      return;
    } else if (elInput.value == 'Thursday') {
      elResult.textContent = 'Payshanba';
      return;
    } else if (elInput.value == 'Friday') {
      elResult.textContent = 'Juma';
      return;
    } else if (elInput.value == 'Saturday') {
      elResult.textContent = 'Shanba';
      return;
    } else if (elInput.value == 'Sunday') {
      elResult.textContent = 'Yakshanba';
      return;
    } if (elInput.value == 'Понедельник') {
      elResult.textContent = 'Dushanba';
      return;
    } else if (elInput.value == 'Вторник') {
      elResult.textContent = 'Seshanba';
      return;
    } else if (elInput.value == 'Среда') {
      elResult.textContent = 'Chorshanba';
      return;
    } else if (elInput.value == 'Четверг') {
      elResult.textContent = 'Payshanba';
      return;
    } else if (elInput.value == 'Пятница') {
      elResult.textContent = 'Juma';
      return;
    } else if (elInput.value == 'Суббота') {
      elResult.textContent = 'Shanba';
      return;
    } else if (elInput.value == 'Воскресенье') {
      elResult.textContent = 'Yakshanba';
      return;
    } return;
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
  } else if (elInput.value == 'Monday') {
    elResult.textContent = 'Monday';
    return;
  } else if (elInput.value == 'Tuesday') {
    elResult.textContent = 'Tuesday';
    return;
  } else if (elInput.value == 'Wednesday') {
    elResult.textContent = 'Wednesday';
    return;
  } else if (elInput.value == 'Thursday') {
    elResult.textContent = 'Thursday';
    return;
  } else if (elInput.value == 'Friday') {
    elResult.textContent = 'Friday';
    return;
  } else if (elInput.value == 'Saturday') {
    elResult.textContent = 'Saturday';
    return;
  } else if (elInput.value == 'Sunday') {
    elResult.textContent = 'Sunday';
    return;
  } else if (elInput.value == 'Понедельник') {
    elResult.textContent = 'Monday';
    return;
  } else if (elInput.value == 'Вторник') {
    elResult.textContent = 'Tuesday';
    return;
  } else if (elInput.value == 'Среда') {
    elResult.textContent = 'Wednesday';
    return;
  } else if (elInput.value == 'Четверг') {
    elResult.textContent = 'Thursday';
    return;
  } else if (elInput.value == 'Пятница') {
    elResult.textContent = 'Friday';
    return;
  } else if (elInput.value == 'Суббота') {
    elResult.textContent = 'Saturday';
    return;
  } else if (elInput.value == 'Воскресенье') {
    elResult.textContent = 'Sunday';
    return;
  } return;
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
  } else if (elInput.value == 'Monday') {
    elResult.textContent = 'Понедельник';
    return;
  } else if (elInput.value == 'Tuesday') {
    elResult.textContent = 'Вторник';
    return;
  } else if (elInput.value == 'Wednesday') {
    elResult.textContent = 'Среда';
    return;
  } else if (elInput.value == 'Thursday') {
    elResult.textContent = 'Четверг';
    return;
  } else if (elInput.value == 'Friday') {
    elResult.textContent = 'Пятница';
    return;
  } else if (elInput.value == 'Saturday') {
    elResult.textContent = 'Суббота';
    return;
  } else if (elInput.value == 'Sunday') {
    elResult.textContent = 'Воскресенье';
    return;
  } else if (elInput.value == 'Понедельник') {
    elResult.textContent = 'Понедельник';
    return;
  } else if (elInput.value == 'Вторник') {
    elResult.textContent = 'Вторник';
    return;
  } else if (elInput.value == 'Среда') {
    elResult.textContent = 'Среда';
    return;
  } else if (elInput.value == 'Четверг') {
    elResult.textContent = 'Четверг';
    return;
  } else if (elInput.value == 'Пятница') {
    elResult.textContent = 'Пятница';
    return;
  } else if (elInput.value == 'Суббота') {
    elResult.textContent = 'Суббота';
    return;
  } else if (elInput.value == 'Воскресенье') {
    elResult.textContent = 'Воскресенье';
    return;
  } return;
}
})


