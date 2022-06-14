# wfm-microservices-sample
a sample nestjs project for using RabbitMQ with nestjs microservices to handle event streams 

## Running the project prerequisites

Before running the project we need to run RabbitMQ **Best way to use a docker container for dev purposes** 

## Starting the samples:
* First we have to configure RMQ in both projects 
* In workflow-manager:
**     Edit app.module.ts and change the URLs to the URL of RMQ 
* In Charity and Limit Handlers
**     Edit main.ts and change the URLs to URL of RMQ
* We can also change the queue name if necessery 

## What is sse sample:
This sample represents the client to handle a specific type of event from the 

After running all projects the following happens
* limit-handler and charity-handler is now listenting to RMQ queue = workflow_management
* event-steam-client: is now ready to emit events into the event stream (RMQ)

Now from your browser call **http://localhost:3000/perform-action?action=reject** This will send event (rejection event) to the queue and because the name is **wfm-limit-event** this will be handled be limit handler

If you call http://localhost:3000/perform-charity-action?action=reject This will send event (rejection event) to the queue and because the name is **wfm-charity-event** this will be handled be charity handler



## How can we use these samples:
The  handlers can be used in containers along with other APIs (the container will contain two apps running on different ports) 
* The handler ports are not exposing any portsm they are only consumers.

