var http=require("http");

http.createServer(function(request,response){
    response.writeHead(200,{"Content":"text/plain"});
    response.write("Hello world!");
    response.end();
}).listen(8888);

