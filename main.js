document.addEventListener("DOMContentLoaded", () => {
  // Create the game container
  const gameContainer = document.createElement("div");
  gameContainer.id = "gameContainer";

  // Create the game board
  const gameBox = document.createElement("div");
  gameBox.id = "gameBoard";

  // Create the game score
  const gameScoreBlock = document.createElement("div");
  gameScoreBlock.id = "gameScore";
  gameScoreBlock.innerHTML =
    'Score <span id="score">0</span>/<span id="totalBalls">0</span>';

  // Create the upper circles
  const upperCircles = document.createElement("div");
  upperCircles.id = "upperCircles";
  upperCircles.className = "circlesSet";
  for (let i = 1; i <= 3; i++) {
    const circle = document.createElement("i");
    circle.id = `circle${i}`;
    circle.className = `fa-solid fa-futbol topCircle circle`;
    circle.style.fontSize = "60px";
    upperCircles.appendChild(circle);
  }

  // Create the left circles
  const leftCircles = document.createElement("div");
  leftCircles.id = "leftCircles";
  leftCircles.className = "circlesSet";
  for (let i = 4; i <= 6; i++) {
    const circle = document.createElement("i");
    circle.id = `circle${i}`;
    circle.className = `fa-solid fa-futbol leftCircle circle`;
    circle.style.fontSize = "60px";
    leftCircles.appendChild(circle);
  }

  // Add a special class for the last circle
  leftCircles.lastElementChild.classList.remove(
    "fa-solid",
    "fa-futbol",
    "leftCircle",
    "circle"
  );
  leftCircles.lastElementChild.className =
    "fa-solid fa-futbol leftDiagonalCircle circle";

  // Create the game controls
  const gameControls = document.createElement("div");
  gameControls.id = "gameControls";
  gameControls.innerHTML = `
    <button type="button" id="gameRestart">
      <i class="fa-solid fa-rotate-right"></i>
    </button>
    <button type="button" id="gameSpeed">1x</button>
  `;

  // Create the right circles
  const rightCircles = document.createElement("div");
  rightCircles.id = "rightCircles";
  rightCircles.className = "circlesSet";
  for (let i = 7; i <= 9; i++) {
    const circle = document.createElement("i");
    circle.id = `circle${i}`;
    circle.className = `fa-solid fa-futbol rightCircle circle`;
    circle.style.fontSize = "60px";
    rightCircles.appendChild(circle);
  }

  // Create the bottom circles
  const bottomCircles = document.createElement("div");
  bottomCircles.id = "bottomCircles";
  bottomCircles.className = "circlesSet";
  for (let i = 10; i <= 12; i++) {
    const circle = document.createElement("i");
    circle.id = `circle${i}`;
    circle.className = `fa-solid fa-futbol bottomCircle circle`;
    circle.style.fontSize = "60px";
    bottomCircles.appendChild(circle);
  }

  // Create the game start counter
  const gameStartCounter = document.createElement("div");
  gameStartCounter.id = "gameStartCounter";
  gameStartCounter.innerHTML = '<span id="counter"></span>';

  // Create the gameover banner
  const gameOverContainer = document.createElement("div");
  gameOverContainer.id = "gameOverContainer";
  gameOverContainer.innerHTML = '<span id="gameOverBanner">GAME OVER</span>';

  // Append all elements to the game board
  gameBox.appendChild(gameScoreBlock);
  gameBox.appendChild(upperCircles);
  gameBox.appendChild(leftCircles);
  gameBox.appendChild(gameControls);
  gameBox.appendChild(rightCircles);
  gameBox.appendChild(bottomCircles);

  // Append the game board and start counter to the game container
  gameContainer.appendChild(gameBox);
  gameContainer.appendChild(gameStartCounter);
  gameContainer.appendChild(gameOverContainer);

  // Append the game container to the body
  document.body.appendChild(gameContainer);

  // Handle game speed change
  const handleGameSpeed = (e) => {
    if (e.target.innerText == "1x") {
      e.target.innerText = "2x";
      speed = 1;
    } else {
      e.target.innerText = "1x";
      speed = 10;
    }
  };

  // Handle restart button click
  const handleRestartButton = () => {
    location.reload();
  };

  // Attach event listeners
  document
    .getElementById("gameRestart")
    .addEventListener("click", handleRestartButton);
  document
    .getElementById("gameSpeed")
    .addEventListener("click", handleGameSpeed);

  // Add Font Awesome link
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  document.head.appendChild(link);

  // Optional: Add basic styles (can be moved to a separate CSS file if needed)
  const style = document.createElement("style");
  style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Lilita+One&display=swap');
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

#gameContainer {
  height: 100vh;
  width: 100vw;
}

#gameBoard {
  height: 100%;
  width: 100%;
  display: flex;
}

.topCircle {
  translate: 0px -64px;
  position: absolute;
}

.leftCircle,
.leftDiagnoalCircle {
  translate: -64px 0px;
  position: absolute;
}

.rightCircle {
  translate: 1295px 0px;
  display: none;
  position: absolute;
}

.bottomCircle {
  translate: 0px 535px;
  display: none;
  position: absolute;
}

#gameScore {
  height: 75px;
  font-size: 25px;
  width: 13%;
  font-family: math;
  padding-top: 22px;
  padding-left: 20px;
  font-weight: bold;
}

#gameSpeed {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  font-weight: 600;
  border: none;
}

#gamePlay {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
}

#gameRestart {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  border: none;
}

#gameControls {
  height: 75px;
  margin-left: 20px;
}

.circlesSet {
  width: 5%;
  height: 75px;
  position: absolute;
}

#gameStartCounter {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}

#gameOverBanner {
  height: 113px;
  width: 433px;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-family: "Carter One", system-ui;
  font-weight: 400;
  font-size: 75px;
  font-style: normal;
  color: red;
  display: none;
}

#counter {
  font-size: 80px;
  font-weight: bold;
  font-family: "Carter One", system-ui;
  color: red;
}
  `;
  document.head.appendChild(style);

  const gameBoard = document.getElementById("gameBoard");

  const circle1 = document.getElementById("circle1");
  const circle2 = document.getElementById("circle2");
  const circle3 = document.getElementById("circle3");
  const circle4 = document.getElementById("circle4");
  const circle5 = document.getElementById("circle5");
  const circle6 = document.getElementById("circle6");
  const circle7 = document.getElementById("circle7");
  const circle8 = document.getElementById("circle8");
  const circle9 = document.getElementById("circle9");
  const circle10 = document.getElementById("circle10");
  const circle11 = document.getElementById("circle11");
  const circle12 = document.getElementById("circle12");

  const allObjects = Array.from(document.querySelectorAll(".circle"));

  console.log(allObjects);

  allObjects.forEach((o) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r}, ${g}, ${b})`;

    o.style.color = color;
  });

  let score = document.getElementById("score");
  let totalBalls = document.getElementById("totalBalls");

  let rounds = 1;
  let gameScore = 0;

  let ballsFallen = 0;
  let speed = 10;

  let r1;
  let r2;
  let r3;

  let obj;

  const objects = {
    football: "fa-futbol",
    spider: "fa-spider",
    fire: "fa-fire",
    ghost: "fa-ghost",
    bomb: "fa-bomb",
  };

  const cursors = {
    player: 'url("https://objectssmashercursors.netlify.app/player.cur"), auto',
    aim: 'url("https://objectssmashercursors.netlify.app/aim.cur"), auto',
    wand: 'url("https://objectssmashercursors.netlify.app/wand.cur"), auto',
    hammer:'url("https://objectssmashercursors.netlify.app/Hammer.cur"), auto',
    frog: 'url("https://objectssmashercursors.netlify.app/frog.cur"), auto',
    fireman: 'url("https://objectssmashercursors.netlify.app/fireman.cur"), auto',
  };

  const audio = new Audio(
    "https://objectssmasheraudios.netlify.app/select-sound-121244.mp3"
  );

  function changeObject(object) {
    obj = object;
    console.log(allObjects);
    let firstObj = allObjects[0];
    let firstObjClasses = firstObj.getAttribute("class");
    firstObjClasses = firstObjClasses.split(" ")[1];
    console.log(firstObjClasses);

    allObjects.forEach((o) => {
      o.classList.remove(firstObjClasses);
      o.classList.add(objects[object]);
    });
  }

  function allocateRanHorVerLocations(r1, r2, r3) {
    displayAllBalls();

    if (rounds <= r1) {
      circle7.style.display = "block";
      circle6.style.display = "none";
      circle10.style.display = "block";
      let randomHorLocT1 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomHorLocB1 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomVerLoc1 = Math.floor(Math.random() * (540 - 60)) + 60;
      let randomVerLocR1 = Math.floor(Math.random() * (540 - 60)) + 60;

      circle1.style.transform = `translateX(${randomHorLocT1}px)`;
      circle4.style.transform = `translateY(${randomVerLoc1}px)`;
      circle7.style.transform = `translateY(${randomVerLocR1}px)`;
      circle10.style.transform = `translateX(${randomHorLocB1}px)`;

      ballsFallen = ballsFallen + 4;
      totalBalls.textContent = ballsFallen;

      movingCirclesHorAndVer(
        randomHorLocT1,
        randomVerLoc1,
        randomVerLocR1,
        randomHorLocB1
      );
    } else if (rounds > r1 && rounds <= r1 + r2) {
      circle7.style.display = "block";
      circle8.style.display = "block";
      circle10.style.display = "block";
      circle11.style.display = "block";
      let randomHorLocT1 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomHorLocB1 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomVerLoc1 = Math.floor(Math.random() * (540 - 60)) + 60;
      let randomVerLocR1 = Math.floor(Math.random() * (540 - 60)) + 60;

      let randomHorLocT2 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomHorLocB2 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomVerLoc2 = Math.floor(Math.random() * (540 - 60)) + 60;
      let randomVerLocR2 = Math.floor(Math.random() * (540 - 60)) + 60;

      circle1.style.transform = `translateX(${randomHorLocT1}px)`;
      circle4.style.transform = `translateY(${randomVerLoc1}px)`;
      circle7.style.transform = `translateY(${randomVerLocR1}px)`;
      circle10.style.transform = `translateX(${randomHorLocB1}px)`;

      circle2.style.transform = `translateX(${randomHorLocT2}px)`;
      circle5.style.transform = `translateY(${randomVerLoc2}px)`;
      circle8.style.transform = `translateY(${randomVerLocR2}px)`;
      circle11.style.transform = `translateX(${randomHorLocB2}px)`;

      ballsFallen = ballsFallen + 8;
      totalBalls.textContent = ballsFallen;

      movingCirclesHorAndVer(
        randomHorLocT1,
        randomVerLoc1,
        randomVerLocR1,
        randomHorLocB1,
        randomHorLocT2,
        randomVerLoc2,
        randomVerLocR2,
        randomHorLocB2
      );
    } else if (rounds > r1 + r2 && rounds <= r1 + r2 + r3) {
      circle6.style.display = "block";
      circle7.style.display = "block";
      circle8.style.display = "block";
      circle9.style.display = "block";
      circle10.style.display = "block";
      circle11.style.display = "block";
      circle12.style.display = "block";

      let randomHorLocT1 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomHorLocB1 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomVerLoc1 = Math.floor(Math.random() * (540 - 60)) + 60;
      let randomVerLocR1 = Math.floor(Math.random() * (540 - 60)) + 60;

      let randomHorLocT2 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomHorLocB2 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomVerLoc2 = Math.floor(Math.random() * (540 - 60)) + 60;
      let randomVerLocR2 = Math.floor(Math.random() * (540 - 60)) + 60;

      let randomHorLocT3 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomHorLocB3 = Math.floor(Math.random() * (1260 - 60)) + 60;
      let randomVerLoc3 = Math.floor(Math.random() * (540 - 60)) + 60;
      let randomVerLocR3 = Math.floor(Math.random() * (540 - 60)) + 60;

      circle1.style.transform = `translateX(${randomHorLocT1}px)`;
      circle4.style.transform = `translateY(${randomVerLoc1}px)`;
      circle7.style.transform = `translateY(${randomVerLocR1}px)`;
      circle10.style.transform = `translateX(${randomHorLocB1}px)`;

      circle2.style.transform = `translateX(${randomHorLocT2}px)`;
      circle5.style.transform = `translateY(${randomVerLoc2}px)`;
      circle8.style.transform = `translateY(${randomVerLocR2}px)`;
      circle11.style.transform = `translateX(${randomHorLocB2}px)`;

      circle3.style.transform = `translateX(${randomHorLocT3}px)`;
      circle6.style.transform = `translateY(${randomVerLoc3}px)`;
      circle9.style.transform = `translateY(${randomVerLocR3}px)`;
      circle12.style.transform = `translateX(${randomHorLocB3}px)`;

      ballsFallen = ballsFallen + 12;
      totalBalls.textContent = ballsFallen;

      movingCirclesHorAndVer(
        randomHorLocT1,
        randomVerLoc1,
        randomVerLocR1,
        randomHorLocB1,
        randomHorLocT2,
        randomVerLoc2,
        randomVerLocR2,
        randomHorLocB2,
        randomHorLocT3,
        randomVerLoc3,
        randomVerLocR3,
        randomHorLocB3
      );
    } else {
      hideAllBalls();
      setTimeout(() => {
        const gameOverBanner = document.getElementById("gameOverBanner");
        gameOverBanner.style.display = "block";
        score.textContent = 0;
        totalBalls.textContent = 0;
      }, 10);
    }
  }

  function movingCirclesHorAndVer(
    randomHorLocT1,
    randomVerLoc1,
    randomVerLocR1,
    randomHorLocB1,
    randomHorLocT2,
    randomVerLoc2,
    randomVerLocR2,
    randomHorLocB2,
    randomHorLocT3,
    randomVerLoc3,
    randomVerLocR3,
    randomHorLocB3
  ) {
    let counter = 0;
    let counter2 = 0;
    let counter3 = 0;
    let leftBallCounter1 = 0;
    let leftBallCounter2 = 0;
    let leftBallCounter3 = 0;
    let rightBallCounter1 = 0;
    let rightBallCounter2 = 0;
    let rightBallCounter3 = 0;
    let bottomBallCounter1 = 0;
    let bottomBallCounter2 = 0;
    let bottomBallCounter3 = 0;

    let intervalId = setInterval(() => {
      if (counter === 595) {
        circle1.style.display = "none";
        circle2.style.display = "none";
        circle3.style.display = "none";
      }

      if (randomVerLoc3 === 535) {
        circle6.style.display = "none";
      }

      if (randomVerLocR3 === 0) {
        circle9.style.display = "none";
      }

      if (rightBallCounter1 === -1295) {
        circle7.style.display = "none";
        circle8.style.display = "none";
        circle9.style.display = "none";
      }

      if (bottomBallCounter1 === -535) {
        circle10.style.display = "none";
        circle11.style.display = "none";
        circle12.style.display = "none";
      }

      if (leftBallCounter1 === 1360) {
        rounds += 1;
        console.log(rounds);
        clearInterval(intervalId);
        allocateRanHorVerLocations(r1, r2, r3, obj);
      }

      if (rounds <= r1) {
        circle1.style.transform = `translate(${randomHorLocT1}px, ${counter++}px)`;
        circle4.style.transform = `translate(${leftBallCounter1++}px, ${randomVerLoc1}px)`;
        circle7.style.transform = `translate(${rightBallCounter1--}px, ${randomVerLocR1}px)`;
        circle10.style.transform = `translate(${randomHorLocB1}px, ${bottomBallCounter1--}px)`;
      }

      if (rounds > r1 && rounds <= r1 + r2) {
        circle1.style.transform = `translate(${randomHorLocT1}px, ${counter++}px)`;
        circle4.style.transform = `translate(${leftBallCounter1++}px, ${randomVerLoc1}px)`;
        circle7.style.transform = `translate(${rightBallCounter1--}px, ${randomVerLocR1}px)`;
        circle10.style.transform = `translate(${randomHorLocB1}px, ${bottomBallCounter1--}px)`;

        circle2.style.transform = `translate(${randomHorLocT2}px, ${counter2++}px)`;
        circle5.style.transform = `translate(${leftBallCounter2++}px, ${randomVerLoc2}px)`;
        circle8.style.transform = `translate(${rightBallCounter2--}px, ${randomVerLocR2}px)`;
        circle11.style.transform = `translate(${randomHorLocB2}px, ${bottomBallCounter2--}px)`;
      }

      if (rounds > r1 + r2 && rounds <= r1 + r2 + r3) {
        circle1.style.transform = `translate(${randomHorLocT1}px, ${counter++}px)`;
        circle4.style.transform = `translate(${leftBallCounter1++}px, ${randomVerLoc1}px)`;
        circle7.style.transform = `translate(${rightBallCounter1--}px, ${randomVerLocR1}px)`;
        circle10.style.transform = `translate(${randomHorLocB1}px, ${bottomBallCounter1--}px)`;

        circle2.style.transform = `translate(${randomHorLocT2}px, ${counter2++}px)`;
        circle5.style.transform = `translate(${leftBallCounter2++}px, ${randomVerLoc2}px)`;
        circle8.style.transform = `translate(${rightBallCounter2--}px, ${randomVerLocR2}px)`;
        circle11.style.transform = `translate(${randomHorLocB2}px, ${bottomBallCounter2--}px)`;

        circle3.style.transform = `translate(${randomHorLocT3}px, ${counter3++}px)`;
        circle6.style.transform = `translate(${leftBallCounter3++}px, ${randomVerLoc3++}px)`;
        circle9.style.transform = `translate(${rightBallCounter3--}px, ${randomVerLocR3--}px)`;
        circle12.style.transform = `translate(${randomHorLocB3}px, ${bottomBallCounter3--}px)`;
      }
    }, speed);
  }

  allObjects.forEach((o) => {
    o.addEventListener("click", (e) => {
      audio.play();
      const originalColor = e.target.style.color;
      e.target.style.color = "black";

      setTimeout(() => {
        e.target.style.display = "none";
        e.target.style.color = originalColor;
        gameScore += 1;
        score.textContent = gameScore;
      }, 100);
    });
  });

  function displayAllBalls() {
    circle1.style.display = "block";
    circle2.style.display = "block";
    circle3.style.display = "block";
    circle4.style.display = "block";
    circle5.style.display = "block";
  }

  function hideAllBalls() {
    allObjects.forEach((c) => {
      c.style.display = "none";
    });
  }

  function startGame(s1, s2, s3, object, cursor) {
    hideAllBalls();
    document.body.style.cursor = cursors[cursor];

    if (object != "") {
      changeObject(object);
    }

    let c = 3;
    const counterBeep = new Audio(
      "https://objectssmasheraudios.netlify.app/short-beep-countdown-81121.mp3"
    );

    const counterId = setInterval(() => {
      const counter = document.getElementById("counter");
      counter.style.display = "block";
      counter.textContent = c;
      counterBeep.play();
      c--;
      if (c === -1) {
        clearInterval(counterId);
        counter.style.display = "none";
      }
    }, 1000);

    setTimeout(() => {
      r1 = s1;
      r2 = s2;
      r3 = s3;
      allocateRanHorVerLocations(r1, r2, r3);
    }, 4000);
  }
  window.startGame = startGame;
});

function ObjectSmasher(s1, s2, s3, object, cursor) {
  setTimeout(() => {
    window.startGame(s1, s2, s3, object, cursor);
  }, 1);
}

window.ObjectSmasher = ObjectSmasher;