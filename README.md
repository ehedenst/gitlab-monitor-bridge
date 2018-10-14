# gitlab-monitor-bridge

HTTP to MQTT bridge that uses gitlab system hooks to wake up gitlab monitor

## Deploying

gcloud functions deploy relayToMQTT --runtime nodejs6 --trigger-http

## Emulator

npm install -g @google-cloud/functions-emulator
functions deploy relayToMQTT --trigger-http
