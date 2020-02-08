# Notes to development of this frontend

Developing on Code.
Running / Manual Tests via Docker Container 'node:13.8.0'.
```sh
docker run --rm node:13.8.0 whoami
docker exec -ti $(docker run --rm -itd node:13.8.0) bash


npm install typescript # What does this do?
npm install tsc #Install tsc (converter?)
npx tsc main.ts #Convert ts to js
node main.js #Start js via node.js
```

