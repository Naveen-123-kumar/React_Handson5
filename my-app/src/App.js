import "./App.css";
import PreComponent from "./Component/PreComponent";
import HOC from "./Component/HOC";
function App() {
  return (
    <>
      <div className="App">
        1.Explain Higher Order Functions.
        {/* Ans-> */}A higher-order component (HOC) is an advanced element for
        reusing logic in React components. Components take one or more
        components as arguments. HOCs are not part of the React API,They are a
        pattern that emerges from React’s compositional nature. a higher-order
        component is a function that takes a component and returns a new
        component. Reason to use Higher-Order component: Easy to handle Get rid
        of copying the same logic in every component
      </div>

      {/* Example of Higher order function</div> */}
      <HOC />
      <br />
      <br />
      <div>
        2.Pure Components
        {/* Ans-> */}
        ReactJS Pure Component Class compares current state and props with new
        props ... Pure Components are Class Components which extends React. Pure
        Components in React are the components which do not re-renders when the
        value of state and props has been updated with the same values
        PureComponent Is Primarily Used for Performance Optimization. We can use
        React.memo for transforming a component into pure component1
      </div>
      <PreComponent />
    </>
  );
}

export default App;
