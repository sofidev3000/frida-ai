import "./single-button.css"

const SingleButton = ({buttonclass, text}) => {
  return (
  <>
      <button class={`btn ${buttonclass} `}>{text}</button>

    </>
  );
};

export default SingleButton;
