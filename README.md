# Axis-Datahub

To install the needed resources for the Axis demo Datahub processing step we need to upload two schema definitiopns (one for the input JSON and for for formatting the output JSON) along with a script and a policy. Therefore execute the following commands on the HiveMQ broker to upload all definintions to the HiveMQ datahub.

```
mqtt hivemq schema create --id linecrossing --type json --file linecrossing.json
mqtt hivemq schema create --id linecrosswithnumber --type json --file  linecrosswithnumber.json
mqtt hivemq script create --id=extract_count --file=extract_count.js --type=transformation
mqtt hivemq data-policy create --file=CheckLineCrossSchema.json

```

If needed you can add the ` --url=url`  as the URL of the HiveMQ REST API endpoint (default http://localhost:8888)

Also be careful before uploading the data to the datahub to make sure that you alter  line 4 of the data policy file  `CheckLineCrossSchema.json` file so the topic matches the one you wrote down when creating the MQTT event on the camera. 

It should look like this (but with your serial etc):

`"topicFilter": "axis/B8A44F284388/event/tns:axis/CameraApplicationPlatform/ObjectAnalytics/#"`
