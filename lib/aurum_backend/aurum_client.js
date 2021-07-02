let PROTO_PATH = __dirname + '/aurum.proto';
let grpc = require('@grpc/grpc-js');
let protoLoader = require('@grpc/proto-loader');


let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

let protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// The protoDescriptor object has the full package hierarchy
let routeguide = protoDescriptor.routeguide;