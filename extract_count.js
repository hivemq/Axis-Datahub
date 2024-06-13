function transform(publish, context) {

   publish.payload = {
        "linecrossings": publish.payload.message.data.total,
        "linecrossnumber" : Number (publish.payload.message.data.total)
    }
    publish.topic = "axis-data"
    return publish;
}

