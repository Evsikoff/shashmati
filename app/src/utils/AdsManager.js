export const showAd = (onComplete) => {
  if (window.ysdk) {
    window.ysdk.adv.showFullscreenAdv({
      callbacks: {
        onClose: function (wasShown) {
          onComplete();
        },
        onError: function (error) {
          console.error("Ad error:", error);
          onComplete();
        },
      },
    });
  } else {
    onComplete();
  }
};
