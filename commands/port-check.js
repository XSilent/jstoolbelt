/**
 * port-check
 */
import { createServer } from 'net';

export default function (port) {
  const server = createServer();

  server.once('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      console.log(`❌ Port ${port} is in use.`);
    } else {
      console.log(`❌ Error checking port ${port}:`, err);
    }
  });

  server.once('listening', function () {
    console.log(`✅ Port ${port} is free.`);
    server.close();
  });

  server.listen(port);
};
