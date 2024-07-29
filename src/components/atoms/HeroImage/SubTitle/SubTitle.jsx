import "./sub-title.css";

const SubTitle = ({ content = "SubTítulo", textAlign  }) => {
  return (
    <h2 className="subtitle" style={{ textAlign }}>{content}</h2>
  );
};

export default SubTitle;
