import React from 'react';
import ReactDOM from 'react-dom';

import {Heading} from './heading.jsx'
import {Paragraph} from './paragraph.jsx'

ReactDOM.render(<Heading></Heading>,document.getElementById("example1"));
ReactDOM.render(<Paragraph></Paragraph>,document.getElementById("example2"));