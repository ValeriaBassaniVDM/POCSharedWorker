
let connections = [];

onconnect = (e) => {
  const port = e.ports[0];
  connections.push(port);

  port.onmessage = (event) => {
    connections.forEach((conn) => {
      if (conn !== port) {
        conn.postMessage(event.data);
      }
    });
  };

  port.onclose = () => {
    connections = connections.filter((conn) => conn !== port);
  };
};
