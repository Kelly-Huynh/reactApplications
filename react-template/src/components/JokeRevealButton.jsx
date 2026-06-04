export const JokeRevealButton = (props) => {
  const handleClick = () => {
    props.setShow(true);
  };

  return (
    <>
      <button onClick={handleClick}>Reveal Answer {props.punchline}!</button>
    </>
  );
};