#!/bin/sh

get_brid(){
    curl -s https://rellide-staging.chromia.dev/node/$1/brid/iid_0
}

if $1
then
    NODE=10149
else 
    read -p "Node Number: " NODE
fi

BRID=$(get_brid $NODE)
echo "brid: $BRID"