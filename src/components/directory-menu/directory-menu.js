import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory-menu.scss";

class DirectoryMenu extends React.Component {
  constructor(props) {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          id: 1,
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          id: 2,
        },
        {
          title: "Shoes",
          imageUrl:
            "https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          id: 3,
        },
        {
          title: "Mens",
          imageUrl:
            "https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          size: "large",
          id: 4,
        },
        {
          title: "Womens",
          imageUrl:
            "https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          size: "large",
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
