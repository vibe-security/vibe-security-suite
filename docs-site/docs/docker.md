---
sidebar_position: 4
---

# Vibe Security Docker

Run Vibe Security Suite in a containerized environment for consistent, isolated scans.

## Pull the Docker Image

```sh
docker pull vibe-security/vibe-docker
```

## Run a Scan

```sh
docker run --rm -v $(pwd):/src vibe-security/vibe-docker scan /src
```

- `-v $(pwd):/src` mounts your current directory into the container.
- Replace `/src` with your code path as needed.

## Advanced Usage

- Scan a specific file:
  ```sh
  docker run --rm -v $(pwd):/src vibe-security/vibe-docker scan /src/file.py
  ```
- Output as SARIF:
  ```sh
  docker run --rm -v $(pwd):/src vibe-security/vibe-docker scan /src --format sarif
  ```

## Learn More
- [CLI Usage](cli)
- [GitHub Action](action)
- [Contributing](contributing)
