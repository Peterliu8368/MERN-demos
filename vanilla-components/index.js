import Counter from "./components/Counter.js";
import Player from "./components/Player.js";
import PlayerModel from "./models/PlayerModel.js";

new Counter(
  { headingText: "Bugs in the code.", btnText: "Bug Found!" },
  document.getElementById("counters")
);

new Counter({ headingText: "Users." }, document.getElementById("counters"));

// Pretend we retrieved this data from a DB ordered by score descending
const rankedPlayersFromDb = [
  new PlayerModel("Neil", "Mos", 9001),
  new PlayerModel("Hamdy", "Yahya", 8571),
  new PlayerModel("Jim", "Reeder", 5321),
];

for (let i = 0; i < rankedPlayersFromDb.length; i++) {
  Player({ rankText: i + 1, player: rankedPlayersFromDb[i] }, document.body);
}
