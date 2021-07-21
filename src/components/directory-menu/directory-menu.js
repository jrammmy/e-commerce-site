import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory-menu.scss";

class DirectoryMenu extends React.Component {
  constructor(props) {
    super();

    this.state = {
      sections: [
        {
          title: "Earrings",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.yifat-bareket.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fa%2Flabradorite_wire_wrapped_earrings_2.jpg&f=1&nofb=1",
          id: 1,
        },
        {
          title: "Bracelets",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg0.etsystatic.com%2F009%2F0%2F6089052%2Fil_fullxfull.419197920_9ghi.jpg&f=1&nofb=1",
          id: 2,
        },
        {
          title: "Necklaces",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F5716539%2Fr%2Fil%2F27a63d%2F275162073%2Fil_fullxfull.275162073.jpg&f=1&nofb=1",
          id: 3,
        },
        {
          title: "Pendants",
          imageUrl: "https://i.redd.it/dgrb7yg0hdj31.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "Rings",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.morenascorner.com%2Fwp-content%2Fuploads%2F2016%2F04%2Fwire-wrapped-rings-DIY-1.jpg&f=1&nofb=1",
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
