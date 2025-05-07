---
sidebar_position: 3
---

# Vibe Security GitHub Action

Automate security scans in your GitHub workflows using the Vibe Security Action.

## Usage
Add the following to your workflow file (e.g. `.github/workflows/security.yml`):

```yaml
name: Vibe Security Scan
on: [push, pull_request]
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vibe-security/vibe-action@v1
```

## Customization
You can customize scan options by passing arguments:

```yaml
      - uses: vibe-security/vibe-action@v1
        with:
          args: scan . --format sarif
```

## Features
- Seamless integration with GitHub Actions
- Fails builds on critical vulnerabilities
- Supports all CLI options

## Learn More
- [CLI Usage](cli)
- [Docker Usage](docker)
- [Contributing](contributing)
