#!/bin/sh

ENV_FILE="./.env"

get_brid(){
    echo $(curl -s https://rellide-staging.chromia.dev/node/$1/brid/iid_0)
}

get_last_node_id(){
    source $ENV_FILE
    echo $NODE_ID
}

print_help(){
    echo "
This scripts gets the brid of your chromia ide node and sets it in the current folder of execution in an '.env' file.
Parameters:
1) integer (Optional) ::= This is your node_id. If left blank, it will read the last node_id from the .env file. If given, it will use this node_id to get the brid and sets it in the mentioned '.env' file.
    "
}

if [ "$1" == "-h" ]
then
    print_help
else 
    if [ -z $1 ]
    then
        NODE_ID=$(get_last_node_id)
    else 
        NODE_ID=$1
    fi

    BRID=$(get_brid $NODE_ID)

    echo "BRID=$BRID"
    echo "NODE_ID=$NODE_ID"

    echo "BRID=$BRID" > $ENV_FILE
    echo "NODE_ID=$NODE_ID" >> $ENV_FILE
fi



