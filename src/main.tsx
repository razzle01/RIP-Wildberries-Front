import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Основной компонент приложения
import { Provider } from "react-redux"; // Для подключения Redux
import { store } from "./store"; // Ваше хранилище Redux
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключение стилей Bootstrap

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Оборачиваем приложение в Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

      

// Регистрация сервис-воркера после рендера приложения
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
	  navigator.serviceWorker
		.register('/RIP-Wildberries-Front/serviceWorker.js')
		.then(() => console.log('Service Worker registered'))
		.catch(err => console.log('Service Worker not registered', err));
	});
  }
