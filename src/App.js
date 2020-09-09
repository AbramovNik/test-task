import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { Spinner } from "reactstrap";
import ItemsTable from "./components/table/itemsTable";
import TablePagination from "./components/pagination/pagination";

import axios from "axios";

class App extends Component {
  state = {
    items: [],
    loading: true,
    currentPage: 1,
    itemsPerPage: 3,
    totalItems: null,
  };

  componentDidMount() {
    this.loadItems(this.currentPage);
  }

  loadItems(page) {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`http://localhost:3000/members`, {
          params: {
            _page: page,
            _limit: this.state.itemsPerPage,
          },
        })
        .then((res) =>
          this.setState({
            items: res.data,
            loading: false,
            totalItems: +res.headers["x-total-count"],
          })
        )

        .catch((err) => console.log("error", err));
    }, 2000);
  }

  onPageChanged = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    if (pageNumber === this.state.currentPage) {
      return;
    }
    this.loadItems(pageNumber);
  };

  render() {
    const { items, itemsPerPage, loading, totalItems } = this.state;

    const content = loading ? (
      <Spinner />
    ) : (
      <>
        <ItemsTable items={items} />
        <TablePagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
    return (
      <Router>
        <div className="App">
          <div className="container" style={{ textAlign: "center" }}>
            <Route path="/">{content}</Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
