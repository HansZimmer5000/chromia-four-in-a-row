FROM node:13.7.0

RUN cd /tmp/
RUN npm install postchain-client
RUN npm install typescript 
RUN npm install @types/node
# TODO Does not work at all
CMD cd /tmp/ && npx tsc index.ts && cp *.js ./compiled/ && node index.js