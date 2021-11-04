# Habla Chat App

## Run Backend
```bash
$ cd backend
$ go run main.go
```
## Run Frontend
```bash
$ cd frontend
$ npm install
$ npm run dev
```
## Backend created with
```bash
$ cd backend
$ GO111MODULE=on
$ go mod init github.com/diogothedev/habla-chat-app
```
## Frontend created with
```bash
$ cd frontend
$ npm init vite@latest . -- --template react
```
## Build the Backend with Docker
```bash
$ docker build -t backend .
Sending build context to Docker daemon  11.26kB
Step 1/8 : FROM golang:1.11.1-alpine3.8
 ---> 95ec94706ff6
Step 2/8 : RUN apk add bash ca-certificates git gcc g++ libc-dev
 ---> Running in 763630b369ca
 ...
```
## Running the Backend with Docker
```bash
$ docker run -i -p 8080:8080 backend
Habla Chat App v0.01
WebSocket Endpoint Hit
Size of Connection Pool:  1
&{ 0xc000124000 0xc0000902a0 {0 0}}
Message Received: {Type:1 Body:test}
Sending message to all clients in Pool
```