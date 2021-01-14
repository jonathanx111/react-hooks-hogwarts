import piggy from "../assets/porco.png";
import OrganizationBar from "./OrganizationBar";

const Nav = ({ filterByGreased, greasedState, setSortState, sortState  }) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <OrganizationBar 
        filterByGreased={filterByGreased} 
        greasedState={greasedState}
        setSortState={setSortState}
        sortState={sortState}
      />
    </div>
  );
};

export default Nav;