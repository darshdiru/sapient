import React, { Component } from "react";
import axios from "axios";
import "./LandingPage.css";
import Cards from "./Cards";
import "./Cards.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`https://api.spacexdata.com/v3/launches?limit=100`)
      .then((res) => {
        const data = res.data;
        this.setState({ products: data, isLoading: true });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.products);
    return (
      <main className="row">
        <aside className="side">
          <div className="card-holder">
            <div className="card-inner">
              <table>
                <thead>
                  <tr>
                    <th>
                      <input
                        type="text"
                        id="Launch-Filter"
                        className="filter-control"
                        placeholder="Launch Year"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.filter((m, index) => (
                     x = m.find(item => item.id === index.id);
  if (!x) {
      <tr>
                      <td>
                        <button type="button" id={m.id}>
                          {m.launch_year}
                        </button>
                      </td>
                    </tr>
  } else {
return null  }
                  
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </aside>
        <section className="main">
          {/* <Cards products={products} /> */}
        </section>
      </main>
    );
  }
}

export default LandingPage;
