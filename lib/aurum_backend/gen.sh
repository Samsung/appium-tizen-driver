#!/bin/bash

PROTO_TO_JS_COMPILER="grpc_tools_node_protoc"

if ! command -v "$PROTO_TO_JS_COMPILER" &> /dev/null
then
    echo "$PROTO_TO_JS_COMPILER could not be found"
    echo "Install it with the following command:"
    echo "npm install -g grpc-tools"
    exit
fi

"$PROTO_TO_JS_COMPILER" --js_out=import_style=commonjs,binary:./ \
  --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`\
  -I ./ ./aurum.proto