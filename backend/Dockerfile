FROM golang:1.16-alpine

RUN mkdir /app
ADD . /app/

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./

RUN go build ./...
RUN ls

EXPOSE 8080

CMD go run /app/main.go