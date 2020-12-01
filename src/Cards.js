import React from "react";
import "./Cards.css";

function Cards(props) {
  const products = props;
  return (
    <>
      {products.map((m) => (
        <div className="cards">
          <div className="card">
            <img src="img" alt="img1" />
            <div className="text">
              <ul>
                <li>Mission Ids:</li>
                <ul>
                  <li>list Mission Ids</li>
                </ul>
                <li>Launch Year: {m.launch_year}</li>
                <li>Successful Launch</li>
                <li>Successful Landing</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/pix/samples/24m.jpg" alt="Sample" />
            <div className="text">
              <ul>
                <li>Mission Ids:</li>
                <ul>
                  <li>list Mission Ids</li>
                </ul>
                <li>Launch Year</li>
                <li>Successful Launch</li>
                <li>Successful Landing</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/pix/samples/22l.jpg" alt="Sample" />
            <div className="text">
              <ul>
                <li>Mission Ids:</li>
                <ul>
                  <li>list Mission Ids</li>
                </ul>
                <li>Launch Year</li>
                <li>Successful Launch</li>
                <li>Successful Landing</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/pix/samples/15l.jpg" alt="Sample" />
            <div className="text">
              <ul>
                <li>Mission Ids:</li>
                <ul>
                  <li>list Mission Ids</li>
                </ul>
                <li>Launch Year</li>
                <li>Successful Launch</li>
                <li>Successful Landing</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/pix/samples/25m.jpg" alt="Sample" />
            <div className="text">
              <ul>
                <li>Mission Ids:</li>
                <ul>
                  <li>list Mission Ids</li>
                </ul>
                <li>Launch Year</li>
                <li>Successful Launch</li>
                <li>Successful Landing</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/pix/samples/16l.jpg" alt="Sample" />
            <div className="text">
              <ul>
                <li>Mission Ids:</li>
                <ul>
                  <li>list Mission Ids</li>
                </ul>
                <li>Launch Year</li>
                <li>Successful Launch</li>
                <li>Successful Landing</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/pix/samples/16l.jpg" alt="Sample" />
            <div className="text">
              <ul>
                <li>Mission Ids:</li>
                <ul>
                  <li>list Mission Ids</li>
                </ul>
                <li>Launch Year</li>
                <li>Successful Launch</li>
                <li>Successful Landing</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="/pix/samples/16l.jpg" alt="Sample" />
            <div className="text">
              <ul>
                <li>Mission Ids:</li>
                <ul>
                  <li>list Mission Ids</li>
                </ul>
                <li>Launch Year</li>
                <li>Successful Launch</li>
                <li>Successful Landing</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
