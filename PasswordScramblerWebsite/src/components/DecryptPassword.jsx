import { useState } from "react";
import {
  allCharactersArr,
  allCharactersArrReversed,
  useCypher,
  decryptPassword,
} from "../../..";

const DecryptPassword = () => {
  const [scrambledPW, setScrambledPW] = useState(``);
  const [cypher1, setCypher1] = useState(``);
  const [cypher2, setCypher2] = useState(``);
  const [unscrambledPW, setUnscrambledPW] = useState(``);

  const submitHandler = (e) => {
    e.preventDefault();
    const firstCypherArr = useCypher(cypher1, allCharactersArr);
    const secondCypherArr = useCypher(cypher2, allCharactersArrReversed);
    const decryptedPW = decryptPassword(
      scrambledPW,
      firstCypherArr,
      secondCypherArr
    );
    setUnscrambledPW(decryptedPW)
  };

  return (
    <>
      <h1>Unscramble Password</h1>
      <form onSubmit={submitHandler}>
        <label>Cypher 1: </label>
        <input
          type="text"
          name="cypher1"
          placeholder="first cypher"
          value={cypher1}
          onChange={(e) => setCypher1(e.target.value)}
          required
        />
        <br />

        <label>Cypher 2: </label>
        <input
          type="text"
          name="cypher2"
          placeholder="second cypher"
          value={cypher2}
          onChange={(e) => setCypher2(e.target.value)}
          required
        />
        <br />

        <label>Password: </label>
        <input
          type="text"
          name="password"
          placeholder="scrambled password"
          value={scrambledPW}
          onChange={(e) => setScrambledPW(e.target.value)}
          required
        />
        <br />

        <button>Submit</button>
      </form>

      <p>Your password: {unscrambledPW}</p>
    </>
  );
};

export default DecryptPassword;
