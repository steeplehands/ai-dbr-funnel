/// <reference types="vite/client" />

// Type declarations for Stripe Buy Button web component
declare namespace JSX {
  interface IntrinsicElements {
    'stripe-buy-button': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      },
      HTMLElement
    >;
  }
}

// Calendly type declarations
interface CalendlyWidget {
  initBadgeWidget: (options: {
    url: string;
    text: string;
    color: string;
    textColor: string;
    branding: boolean;
  }) => void;
  showPopupWidget: (url: string) => void;
}

interface Window {
  Calendly?: CalendlyWidget;
}
