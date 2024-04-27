import './App.css';
import Box from "./components/Box";
import { useState } from "react";

const choice = {
    rock: { name: "rock", img: require('./assets/rock.png') },
    paper: { name: "paper", img: require('./assets/paper.png') },
    scissor: { name: "scissor", img: require('./assets/scissor.png') }
}

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState(null);
    const [comResult, setComResult] = useState(null);

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);

        let computerChoice = randomChoice();
        setComputerSelect(choice[computerChoice]);

        // 사용자와 컴퓨터의 선택값 비교
        let uResult = judgement(choice[userChoice], computerChoice);
        setResult(uResult);
        setComResult(comJudgement(uResult));
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice); // 객체의 키값만 배열화
        let randomItem = Math.floor(Math.random()*itemArray.length); // 소수점 자리 버리기
        return itemArray[randomItem];
    };

    const judgement = (user, computer) => {
      // console.log("user: ", user, "computer: ", computer);

      if (user.name === computer) { return "TIE"; }
      else if (user.name === "rock") return computer === "scissor" ? "WIN" : "LOSE";
      else if (user.name === "scissor") return computer === "paper" ? "WIN" : "LOSE";
      else if (user.name === "paper") return computer === "rock" ? "WIN" : "LOSE";
    };

    const comJudgement = (userResult) => {
      return userResult === "WIN" ? "LOSE" : userResult === "TIE" ? "TIE" : "WIN";

      // if (userResult === "WIN") { return "LOSE"; }
      // else if (userResult === "LOSE") { return "WIN"; }
      // else { return "TIE"; }
    }

  return (
      <div>
          <div className="main">
              <Box title="You" item={ userSelect } result={ result } />
              <Box title="Computer" item={ computerSelect } result={ comResult } />
          </div>

          <div className="main">
              <button onClick={()=>play("scissor")}>가위</button>
              <button onClick={()=>play("rock")}>바위</button>
              <button onClick={()=>play("paper")}>보</button>
          </div>
      </div>
  );
}

export default App;
