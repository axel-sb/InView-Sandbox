import * as React from "react";
// @ts-ignore Wrong type
import { createRoot } from "react-dom/client";
import { InView } from "react-intersection-observer";
import ScrollWrapper from "./elements/ScrollWrapper";
import Wrapper from "./elements/Wrapper";
import "./styles.css";

function App() {
  const [inView, setInView] = React.useState(false);

  return (
    <ScrollWrapper inView={inView}>
      <InView onChange={setInView}>
        {({ ref, inView }) => (
          <Wrapper ref={ref}>
            <h2>Element is inside the viewport: {inView.toString()}</h2>
          </Wrapper>
        )}
      </InView>
    </ScrollWrapper>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
