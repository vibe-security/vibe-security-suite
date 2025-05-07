---
sidebar_position: 2
---

# Vibe Security CLI

The Vibe Security CLI empowers developers to run security scans locally or in CI/CD pipelines with ease.

## Features
- One-command install
- Code, dependency, and container scanning
- Friendly, emoji-rich output
- Supports multiple output formats (json, sarif)
- Integrates with CI/CD

## Installation
We recommend using [pipx](https://pipxproject.github.io/pipx/) for isolated CLI installs:

```sh
pipx install vibe-security-cli
```

Or use pip:

```sh
pip install vibe-security-cli
```

## Usage Examples

### Scan your project
```sh
vibe scan .
```

### Scan a specific file or directory
```sh
vibe scan path/to/your/code
```

### Output formats
```sh
vibe scan . --format json
vibe scan . --format sarif
```

### Show help
```sh
vibe --help
```

## Learn More
- [GitHub Action](action)
- [Docker Usage](docker)
- [Contributing](contributing)
