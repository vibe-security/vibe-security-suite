---
sidebar_position: 1
---

# Welcome to Vibe Security Suite 🚀

Vibe Security Suite is a unified, open-source security toolkit for modern development teams. This documentation will help you get started quickly and securely.

## What is Vibe Security Suite?

Vibe Security Suite provides:
- **CLI tools** for local and CI/CD security scanning
- **GitHub Action** for automated code scanning in your workflows
- **Docker integration** for containerized security analysis
- **Comprehensive documentation** for setup, usage, and contributing

## Quick Start

### 1. Install the CLI

```sh
pipx install vibe-security-cli
```

### 2. Run Your First Scan

```sh
vibe scan .
```

### 3. Integrate with GitHub Actions

Add the following to your `.github/workflows/security.yml`:

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

### 4. Try Docker

```sh
docker run --rm -v $(pwd):/src vibe-security/vibe-docker scan /src
```

## Learn More

- [CLI Usage](cli)
- [GitHub Action](action)
- [Docker Integration](docker)
- [Contributing](contributing)
- [Security Policy](security)

---

Ready to secure your code? Dive into the sections on the left to explore all features!
