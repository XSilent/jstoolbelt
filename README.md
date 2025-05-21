# jstoolbelt

Like a Swiss Army Knife CLI for developers – written in Node.js.
Will grow with my personal daily life as a developer. Maybe over time
it might be usefull for others as well. 

## Features

- `docker-info`: Show environment variables of a container (set via ENV: `CONTAINER`)
- `port-check <port>`: Check if a given port is available on your machine

## Installation

```bash
npm install -g ./  # from local folder
# or after cloning:
npm link
```

## Usage

```bash
jstoolbelt docker-info
jstoolbelt port-check 8080
```

## Requirements

- Node.js v18+
- Docker installed (for docker-info command)

## License
MIT
