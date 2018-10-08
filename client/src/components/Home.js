import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios'

class Home extends Component {
  state = { coin: {} }

  clicky = () => {
    axios.post('api/coins?coin?coin=btc')
      .then ( res => { debugger })
  }

  clicky2 = ()  => { axios.get('api/coins')
  .then ( res => { debugger })
}


  render() {
    return (
      <div>
<Button onClick={this.clicky}>
      Click Me!
</Button>   
 <Button onClick={this.clicky2}>
      Click Me!
</Button>   
</div>
 )
  }
}

export default Home;

