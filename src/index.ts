declare global {
  interface Window {
    hardal?: {
      trackEvent: (eventName: string) => void;
    };
  }
}

export function sendToHardal(data: string) {
  if (typeof window.hardal !== "undefined" && data) {
    window.hardal.trackEvent(data);
    console.log(`${data} is sent!`);
  } else {
    console.warn("Hardal is not loaded"); // should be add the guide docs as link
  }
}

function loadMyLib() {
  const script = document.createElement("script");
  script.src = "";
  script.setAttribute("data-website-id", "asdasd");
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Call the function to load the script
loadMyLib();
