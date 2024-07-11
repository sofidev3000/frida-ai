

const SingleButton = ({buttonclass, text}) => {
  return (
    <div class="hero__buttons">
      <button class={`btn ${buttonclass} `}>{text}</button>

    </div>
  );
};

export default SingleButton;
