const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
    console.log('User connected');

    socket.on('message', (message) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message); // Send message to all connected clients
            }
        });
    });

    socket.on('close', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
