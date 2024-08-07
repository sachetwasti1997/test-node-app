const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
    axios.get("http://10.1.2.53:8081/subjects/twitter-topic-value/versions?normalize=false")
    .then(res => console.log(res.data));

    axios
    //   .put('http://eks-srv:9200/twitter-index', {
    //     "mappings": {
    //         "properties": {
    //             "userId": {
    //                 "type": "long"
    //             },
    //             "id": {
    //                 "type": "text",
    //                 "fields": {
    //                     "keyword": {
    //                         "type": "keyword",
    //                         "ignore_above": 256
    //                     }
    //                 }
    //             },
    //             "createdAt": {
    //                 "type": "date",
    //     "format": "yyyy-MM-dd'T'HH:mm:ssZZ"
    //             },
    //             "text": {
    //                 "type": "text",
    //                 "fields": {
    //                     "keyword": {
    //                         "type": "keyword",
    //                         "ignore_above": 256
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // })
    // .post('http://eks-srv:9200/twitter-index/_doc/1', {
    //     "userId": 1,
    //     "id": 1,
    //     "creadtedAt": "2024-01-01T23:00:50+0000",
    //     "text": "multi word test"
    // })
    .get('http://eks-srv:9200/twitter-index/_search?q=id:1')
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
});