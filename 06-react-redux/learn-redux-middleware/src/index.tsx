import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer, {rootSaga} from "./modules";
import logger from 'redux-logger';
import { thunk } from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import myLogger from "./middlewares/myLogger";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, sagaMiddleware, logger, myLogger)
    )
)
// 주의: 스토어 생성이 된 다음에 아래 코드를 실행해야합니다.
sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
