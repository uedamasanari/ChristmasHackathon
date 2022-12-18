package main

import (
	"github.com/uedamasanari/ChristmasHackathon/router"
)

func main() {
	e := router.Initialize()
	e.Logger.Fatal(e.Start(":1323"))
}
