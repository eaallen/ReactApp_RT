import React from 'react';

//import Footer from 'react-bootstrap/';



function Bottom(props) {
  const d = new Date()
  const year = d.getFullYear()
    return (
        <div
            className={props.className}
        >           
         &copy; {year}  North Wast Labs inc.
        </div>
  );
}

export default Bottom;
