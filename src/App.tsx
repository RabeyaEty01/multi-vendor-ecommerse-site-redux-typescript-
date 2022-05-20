import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from 'redux/store';
import TheLayout from './views/pages/TheLayout';
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <TheLayout />
        </BrowserRouter>
      </PersistGate>

    </Provider>
  );
}

export default App;
