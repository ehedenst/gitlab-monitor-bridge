var mqtt = require('mqtt');

var token = process.env.GITLAB_TOKEN || '';

// TODO: parse these from query params
var mqtt_url = process.env.MQTT_URL || 'mqtt://localhost:1883';
var topic = process.env.MQTT_TOPIC || 'gitlab';

exports.relayToMQTT = (req, res) => {
  if (req.get('X-Gitlab-Token') == token) {
    var client = mqtt.connect(mqtt_url);
    client.on('error', function (err) {
      res.status(503).send(err.message);
      client.end(true);
    });
    client.on('connect', function () {
       client.publish(topic, JSON.stringify(req.body), function () {
        client.end(function () {
          res.status(204).end();
        });
      });
    });
  } else {
    res.status(403).send('Invalid token');
  }
};
