# gitlab-monitor-bridge

HTTP to MQTT bridge that uses gitlab system hooks to wake up gitlab monitor

## Deploying

gcloud functions deploy relayToMQTT --runtime nodejs10 --trigger-http

## Testin

npm install
GITLAB_TOKEN=test CLOUDMQTT_URL=mqtts://username:password@sserver:port npm start
curl -H "X-Gitlab-Token: test" http://localhost:5000
