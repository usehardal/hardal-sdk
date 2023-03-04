declare global {
    interface Window {
        hardal?: {
            trackEvent: (eventName: string) => void;
        };
    }
}
export declare function sendToHardal(data: string): void;
export declare function loadMyLib(): void;
