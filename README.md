# gitlab-monitor-bridge

HTTP to MQTT bridge that uses gitlab system hooks to wake up gitlab monitor

## Deploying

gcloud functions deploy gitlabToMQTT --runtime nodejs16 --trigger-http

## Testing

Create .env file with GITLAB_TOKEN and MQTT_URL.

```bash
echo GITLAB_TOKEN=test > .env
echop MQTT_URL=mqtts://username:password@sserver:port >> .env
```

Install deps and start the local server

```bash
npm install
npm start
```

Make a request to the server

```bash
curl -H "X-Gitlab-Token: test" http://localhost:8080
```
