curl -XPOST https://search-cs-hackthon-marshmello-ptan2jgw3scrf54pmh5jhaps74.ap-southeast-1.es.amazonaws.com/_bulk --data-binary @mock-audios.json



curl -XPUT https://search-cs-hackthon-marshmello-ptan2jgw3scrf54pmh5jhaps74.ap-southeast-1.es.amazonaws.com/audios/audio/2 -d '{"id": 2, "wavfile": "y123456@rtcuat.credit-suisse.com--conference_2017-11-03_13-21.wav", "created_time": "2017-11-03 13:21", "rm_id": "y123456", "client_id": "389173791", "full_text": "this is just recent years i wanna buy a pen media and apple shares confirmed"}'