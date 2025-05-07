---
layout: page
title: Vibe Security GitHub Action
---

# Vibe Security GitHub Action

Run comprehensive security scans in your CI/CD pipelines using open-source tools like Semgrep, SQLMap, and Trivy—all in one step, directly from GitHub Actions workflows.

## Usage
```yaml
name: Vibe Security Workflow
on:
  push:
    branches: [main]
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Run Vibe Security scan
        uses: vibe-security/vibe-action@v1
```

For more details, see the [GitHub Action repository](https://github.com/vibe-security/vibe-action).
