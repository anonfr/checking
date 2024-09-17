declare global {
  interface Window {
    Telegram: any;
  }
}

export const initTelegramApp = () => {
  const tg = window.Telegram.WebApp;
  tg.expand();
  
  // Set the app header color
  tg.setHeaderColor('#4CAF50');

  // You can add more initialization logic here

  return tg;
};
