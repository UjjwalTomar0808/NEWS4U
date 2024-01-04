import React, { useState } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import GoToTop from './components/GoToTop';
import NavBar from './components/NavBar';

const App = () => {
  const pageSize = 15;
  const NewsapiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route
            path='/'
            element={
              <News
                setProgress={setProgress}
                apiKey={NewsapiKey}
                key='general'
                pageSize={pageSize}
                country='in'
                category='general'
              />
            }
          />

          <Route
            path='/business'
            element={
              <News
                setProgress={setProgress}
                apiKey={NewsapiKey}
                key='business'
                pageSize={pageSize}
                country='in'
                category='business'
              />
            }
          />

          <Route
            path='/entertainment'
            element={
              <News
                setProgress={setProgress}
                apiKey={NewsapiKey}
                key='entertainment'
                pageSize={pageSize}
                country='in'
                category='entertainment'
              />
            }
          />

          <Route
            path='/health'
            element={
              <News
                setProgress={setProgress}
                apiKey={NewsapiKey}
                key='health'
                pageSize={pageSize}
                country='in'
                category='health'
              />
            }
          />

          <Route
            path='/science'
            element={
              <News
                setProgress={setProgress}
                apiKey={NewsapiKey}
                key='science'
                pageSize={pageSize}
                country='in'
                category='science'
              />
            }
          />

          <Route
            path='/sports'
            element={
              <News
                setProgress={setProgress}
                apiKey={NewsapiKey}
                key='sports'
                pageSize={pageSize}
                country='in'
                category='sports'
              />
            }
          />

          <Route
            path='/technology'
            element={
              <News
                setProgress={setProgress}
                apiKey={NewsapiKey}
                key='technology'
                pageSize={pageSize}
                country='in'
                category='technology'
              />
            }
          />
        </Routes>
        <GoToTop />
      </Router>
    </div>
  );
};

export default App;
