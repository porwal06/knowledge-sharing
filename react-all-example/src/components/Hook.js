import React, {useState, useEffect} from "react";
import { Container, Button, Row, ButtonToolbar } from 'react-bootstrap';
//https://jscomplete.com/playground/rgs1.6

function ReactButton(props) {
  const handleClick = () => props.onClickFunction(props.increment);
	return (
  	<Button onClick={handleClick}>
      +{props.increment}
    </Button>
  );
}

function Display(props) {
	return (
  	<Row>{props.message}</Row>
  );
}

function Hook1() {
  //userState returns [state object (getter), updater function (setter)] 
	const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  //userEffect Hook
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${counter} times`;
    
  });
  // useEffect(() => {
  //   document.title = `You clicked ${counter} times`;
  // }, [counter]); // Only re-run the effect if count changes
	return (
    <Container>
      <ButtonToolbar>
      <ReactButton onClickFunction={incrementCounter} increment={1} />
      <ReactButton onClickFunction={incrementCounter} increment={5} />
      <ReactButton onClickFunction={incrementCounter} increment={10} />
      <ReactButton onClickFunction={incrementCounter} increment={100} />
      </ButtonToolbar>
      <Display message={counter}/>
    </Container>  
  );
}

export default Hook1;