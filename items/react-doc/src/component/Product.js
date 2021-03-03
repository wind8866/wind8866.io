import React from 'react';

const productData = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const SearchBar = (props) => {
  return (<div>
    <input value={props.search} onChange={props.changeSearch}/>
    <input type="checkbox" checked={props.stocked} onChange={props.changeStocked}/>
  </div>)
}

const Line = (props) => {
  const row = props.row;
  const style = {
    color: !row.stocked ? 'red' : ''
  };
  return (<tr style={style}>
    <td>{row.name}</td>
    <td>{row.price}</td>
  </tr>);
};

const Title = (props) => {
  return (<tr>
    <th colSpan="2">{props.title}</th>
  </tr>);
};

const List = (props) => {
  const Row = [];
  const {
    data,
    search,
    stocked,
  } = props;

  let lastCategory = '';
  data.forEach((p, index) => {
    if (!p.name.includes(search)) {
      return;
    }
    if (stocked && !p.stocked) {
      return;
    }
    if (lastCategory !== p.category) {
      Row.push(<Title key={'title-' + index} title={p.category} />);
      lastCategory = p.category;
    }
    Row.push(<Line key={index} row={p} />);
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Row}
      </tbody>
      <tfoot>

      </tfoot>
    </table>
  )
}

class Product extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        stocked: false,
        search: '',
        data: productData,
      }
  }
  changeSearch = (e) => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
  }
  changeStocked = (e) => {
    console.log(e)
    this.setState({
      stocked: e.target.checked
    });
  }
  render() {
    const {
      search,
      stocked,
      data,
    } = this.state;

    return (<div>
        <SearchBar
          stocked={stocked}
          search={search}
          changeStocked={this.changeStocked}
          changeSearch={this.changeSearch}
        />
        <List
          stocked={stocked}
          search={search}
          data={data}
        />
    </div>);
  }
}

export default Product;