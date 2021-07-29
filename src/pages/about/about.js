import React from "react";
import "./about.scss";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ],
    };
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  render() {
    const { foo } = this.state;

    // setInterval(() => {
    //   this.setState(this.state);
    // }, 300);

    return (
      <div className="container">
        {foo.map((e, i) => (
          <div key={i}>
            {e.map((el, idx) => (
              <div
                key={idx}
                className="bar"
                style={{
                  backgroundColor: `rgb(
                    ${this.getRandomInt(255)},
                    ${this.getRandomInt(255)},
                    ${this.getRandomInt(255)}
                  )`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
