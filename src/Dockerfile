FROM golang:1.19 

WORKDIR /app
COPY . /app

RUN go mod download

ENV CGO_ENABLED=0 \
  GOOS=linux \
  GOARCH=amd64
EXPOSE 1323

CMD ["go", "run", "server.go"]
