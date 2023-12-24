import styles from "../styles/HangmanDrawing.module.css";

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      position: "absolute",
      top: "50px",
      right: "-30px",
      border: "10px solid black",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "80px",
      position: "absolute",
      top: "120px",
      right: 0,
      background: "black",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      background: "black",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      background: "black",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "190px",
      right: "-90px",
      rotate: "60deg",
      background: "black",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "190px",
      right: "0px",
      rotate: "-60deg",
      background: "black",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PART = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
  isLoser: boolean;
};
const HangmanDrawing = ({ numberOfGuesses, isLoser }: HangmanDrawingProps) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className={`${isLoser && styles.animation}`}>
        {BODY_PART.slice(0, numberOfGuesses)}
      </div>
      <div
        style={{
          width: "10px",
          height: "50px",
          background: "black",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          width: "150px",
          height: "10px",
          background: "black",
          marginLeft: "95px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "300px",
          background: "black",
          marginLeft: "95px",
        }}
      />
      <div style={{ width: "200px", height: "10px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
