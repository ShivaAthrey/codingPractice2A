const Button = (props) => {
  const { buttonText, buttonColor } = props;
  return <button className={buttonColor}>{buttonText}</button>;
};

const element = (
  <div className="container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" buttonColor="like-button" />
        <Button buttonText="Comment" buttonColor="comment-button" />
        <Button buttonText="Share" buttonColor="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
