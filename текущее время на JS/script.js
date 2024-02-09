'use strict';

const updateCurrentTimer = () => {
  let currentTimeElem = document.querySelector('#currentTime'),
      currentTime = new Date(),
      houers = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds();

      houers = (houers < 10 ? `0${houers}` : houers);
      minutes = (minutes < 10 ? `0${minutes}` : minutes);
      seconds = (seconds < 10 ? `0${seconds}` : seconds);

  currentTimeElem.innerHTML = `
    ${houers} : ${minutes} : ${seconds}
  `

  // style
  currentTimeElem.style.cssText = `
  margin: 50px auto;
  padding: 15px;
  width: 250px;
  color: red;
  font-size: 3em;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 2px 5px black;
  border: 1px solid black;
`
}

setInterval(updateCurrentTimer, 1000);

/* description

простые часы, отображающие текущее время. JavaScript-код обновляет время каждую секунду, обеспечивая актуальные показания часов.
*/