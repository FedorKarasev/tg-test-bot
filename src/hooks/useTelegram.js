export function useTelegram() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  const onToggle = () => {
    if (!tg.MainButton.isVisible) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  };

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggle,
  };
}
