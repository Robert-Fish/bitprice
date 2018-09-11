class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    let list = "";

    if (this.state.currency === "USD") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.USD.description} :{" "}
          <strong>${this.props.bpi.USD.rate}</strong>
          <span className="badge badge-primary" style={{ marginLeft: "10px" }}>
            {this.props.bpi.USD.code}
          </span>
        </li>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.GBP.description} :{" "}
          <strong>£{this.props.bpi.GBP.rate}</strong>
          <span className="badge badge-primary" style={{ marginLeft: "10px" }}>
            {this.props.bpi.GBP.code}
          </span>
        </li>
      );
    } else if (this.state.currency === "EUR") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.EUR.description} :{" "}
          <strong>€{this.props.bpi.EUR.rate}</strong>
          <span className="badge badge-primary" style={{ marginLeft: "10px" }}>
            {this.props.bpi.EUR.code}
          </span>
        </li>
      );
    }
    return (
      <div>
        <ul className="list-group">{list}</ul>
        <br />
        <h4>Select Your Currency</h4>
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
    );
  }
}

export default Prices;
