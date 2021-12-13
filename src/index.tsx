import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { GlobalStyles } from './globalStyles/GlobalStyles';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
)