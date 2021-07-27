import React from "react";
import MenuItem from "../menu-item/menu-item";
import DATA from "./data";
import "./directory-menu.scss";

class DirectoryMenu extends React.Component {
  constructor(props) {
    super();

    this.state = {
      sections: DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
