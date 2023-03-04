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

export function loadMyLib() {
  if (typeof window.hardal !== "undefined") {
    const script = window?.document.createElement("script");
    script.src = "";
    script.setAttribute("data-website-id", "asdasd");
    script.async = true;
    script.defer = true;
    window.document.head.appendChild(script);
  } else {
    console.warn("Hardal is not loaded"); // should be add the guide docs as link
  }
}
