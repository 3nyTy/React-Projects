import React, { Component } from 'react';
import { connect } from 'react-redux';

class MarketList extends Component {
renderShare (shareData) {
  const name = shareData.name;
  const id = shareData.id;

return(
  <tr key = {id}>
  <td>id</td>
  <td>
  name
  </td>
  </tr>
)
}


render() {
  return (
    <table>
    <thead>
    <tr>
      <th> Name </th>
      <th>ID 
      </th>
    </tr>
    </thead>
    <tbody>{this.props.allShares.map(this.renderShares)}</tbody>
    </table>
  )
}
}

function mapStateToProps({share}) {
  return {share};

}
export default  connect(mapStateToProps)(allShares);