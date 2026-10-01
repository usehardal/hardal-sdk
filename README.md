<p align="center">
  <a href="https://usehardal.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://imge.usehardal.com/cdn/logo/new/svg/hnav0hronsb1fttdnmph.svg?raw=1">
      <source media="(prefers-color-scheme: light)" srcset="https://imge.usehardal.com/cdn/logo/new/svg/ptlior6hfvknmblekenh.svg?raw=1">
      <img src="https://imge.usehardal.com/cdn/logo/new/svg/ptlior6hfvknmblekenh.svg?raw=1" alt="Hardal" width="180">
    </picture>
  </a>
</p>

# Hardal Browser SDK Helpers

This repository contains small TypeScript helpers for interacting with an existing Hardal browser tracker. Its package metadata uses the name `hardak`; the published JavaScript and React SDK is maintained separately in [usehardal/hardal](https://github.com/usehardal/hardal).

[![Package license: MIT](https://img.shields.io/badge/Package%20license-MIT-blue.svg)](package.json) [![Package version](https://img.shields.io/badge/version-1.0.0-green.svg)](package.json)

## Repository API

The functions are defined in [src/index.ts](src/index.ts):

- `sendToHardal(eventName)` calls `window.hardal.trackEvent(eventName)` when a tracker is already available.
- `loadMyLib()` contains an empty script URL and a placeholder website ID. It requires implementation before it can load a real tracker.

These helpers target a browser environment. This repository does not export `HardalProvider`.

## Getting started with the published SDK

For JavaScript or React integrations, use the published `hardal` package and follow [its README](https://github.com/usehardal/hardal#readme). The installation commands and React example below refer to that package.

### Installation

```bash
npm install hardal
# or
yarn add hardal
```

### React example

Wrap your app in the published SDK's `HardalProvider` and provide your website ID and endpoint:

```tsx
'use client';

import { HardalProvider } from 'hardal/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HardalProvider
      config={{
        website: 'YOUR_WEBSITE_ID',
        hostUrl: 'https://YOUR_SIGNAL_ENDPOINT',
      }}
      autoPageTracking={true}
    >
      {children}
    </HardalProvider>
  );
}
```

## Support

Maintained by [Hardal](https://github.com/usehardal).

- [Hardal documentation](https://docs.usehardal.com)
- [Report an issue](https://github.com/usehardal/hardal-sdk/issues)
- [Hardal website](https://usehardal.com)

