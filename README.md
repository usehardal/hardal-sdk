<p align="center">
  <a href="https://usehardal.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://imge.usehardal.com/cdn/logo/new/svg/hnav0hronsb1fttdnmph.svg?raw=1">
      <source media="(prefers-color-scheme: light)" srcset="https://imge.usehardal.com/cdn/logo/new/svg/ptlior6hfvknmblekenh.svg?raw=1">
      <img src="https://imge.usehardal.com/cdn/logo/new/svg/ptlior6hfvknmblekenh.svg?raw=1" alt="Hardal" width="180">
    </picture>
  </a>
</p>

# Hardal SDK for React

[![License metadata: MIT](https://img.shields.io/badge/Package%20license-MIT-blue.svg)](package.json) [![version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://semver.org)

A React SDK for adding first-party analytics to your app with Hardal.

## Install

```bash
npm install hardal
# or
yarn add hardal
```

> `package.json` names this repository's package `hardak`, which is not published on npm. The commands above install the published `hardal` SDK.

## How to use

Wrap your app in `HardalProvider` and provide your website ID and endpoint:

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
