import "./single-button.css"

const SingleButton = ({buttonclass, text}) => {
  return (
  <>
      <button className={`btn ${buttonclass} `}>{text}</button>

    </>
  );
};

export default SingleButton;
