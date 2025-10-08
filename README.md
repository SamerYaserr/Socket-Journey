# Socket-Journey

## Overview

Welcome to **Socket-Journey**! This repository documents my personal journey in learning and experimenting with socket programming. Sockets are fundamental for network communication, enabling applications to send and receive data over the internet or local networks. Here, I'll share code examples, tutorials, and small projects to build practical skills in creating client-server applications, handling connections, and managing data transmission.

## Why Socket Programming?

- Understand low-level networking concepts.
- Build real-time applications like chat apps, file transfer tools, or games.
- Essential for backend development, IoT, and distributed systems.

## Quickstart

1. Clone the repo

```bash
git clone https://github.com/SamerYaserr/Socket-Journey.git
cd Socket-Journey
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file based on the example below (if not present)

```
# .env example
PORT=3000
NODE_ENV=development
```

4. Development (auto-reload)

```bash
npm run dev
```

5. Production build + start

```bash
npm run build
npm start
```

The `dev` script in `package.json` runs `nodemon ./src/server.ts`, and `start` runs the compiled `dist/server.js`.
