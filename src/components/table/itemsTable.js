import React, { Component } from "react";
import { Table } from "reactstrap";
import Header from "../header/header";

class ItemsTable extends Component {
  state = {
    sortKey: null,
  };

  sortItems = (id) => {
    const { sortKey } = this.state;
    let sortedItems;
    switch (id) {
      case "id":
        if (sortKey !== "id") {
          sortedItems = this.props.items.sort((a, b) => a.id - b.id);
        } else if (sortKey === "id") {
          sortedItems = this.props.items.reverse();
        }
        this.setState({
          sortedItems,
          sortKey: "id",
        });
        break;
      case "name":
        if (sortKey !== "name") {
          sortedItems = this.props.items.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
        } else if (sortKey === "name") {
          sortedItems = this.props.items.reverse();
        }
        this.setState({
          sortedItems,
          sortKey: "name",
        });
        break;

      case "position":
        if (sortKey !== "position") {
          sortedItems = this.props.items.sort((a, b) => {
            if (a.position > b.position) {
              return 1;
            }
            if (b.position > a.position) {
              return -1;
            }
            return 0;
          });
        } else if (sortKey === "position") {
          sortedItems = this.props.items.reverse();
        }
        this.setState({
          sortedItems,
          sortKey: "position",
        });
        break;
      default:
        break;
    }
  };

  render() {

    const { items } = this.props;
    return (
      <div>
        <Table bordered>
          <Header sortItems={(id) => this.sortItems(id)} />
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.position}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ItemsTable;
