import "../style/Header.scss";

const Header = ({ clickedImages, bestScore }) => {
  return (
    <>
      <div className="header">
        <h1 className="title">Memory Game</h1>
        <div className="scoreBoard">
          <span>Score: {`${clickedImages.length}`}</span>
          <span>Best score: {bestScore}</span>
        </div>
      </div>
      <hr />
      <h4>&nbsp;Don&apos;t click on any image more than once.</h4>
      <hr />
    </>
  );
};

export default Header;
