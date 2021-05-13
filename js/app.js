import React from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
    return (
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      );
    }

ReactDOM.render(<App />, document.querySelector('#app'));
