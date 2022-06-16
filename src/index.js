import reportWebVitals from './reportWebVitals';
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <App/>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
          <Route path="events" element={<Events />}/>
            <Route path="events/:event" element={<EventDetails/>}/>
          <Route path="venues" element={<Venues />} />
          <Route path="about" element={<About />} />
          <Route path='admin/login' element={<Login/>}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Route>
    </Routes>
</BrowserRouter>
 */

