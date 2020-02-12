# Notes to development of this frontend

Developing on Code and [WebIDE](https://rellide-staging.chromia.dev/), don't forget to set 'Run URL' to 'Current Rell Cloude IDE URL'.
Running / Manual Tests via Docker Container 'node:13.8.0', but check if [URL (node id & brid)](https://rellide-staging.chromia.dev/node/10125/brid/iid_0) is set right!
```sh
docker-compose up
```

Use ```getBrid.sh``` to get the brid of your application deployed via the [WebIDE](https://rellide-staging.chromia.dev/). ```getBrid.sh true``` will use a default node number, ```getBrid.sh false``` will ask your for the current node number.
