package controllers

import (

	"sync"
	"net/http"
	"github.com/labstack/echo/v4"

	"github.com/uedamasanari/ChristmasHackathon/models"
	"github.com/uedamasanari/ChristmasHackathon/database"
)

var db = database.Connect()
var lock  = sync.Mutex{}

func CreateSanta(c echo.Context) error {

	lock.Lock()
	defer lock.Unlock()
	
	s := models.Santa{}
	err := c.Bind(&s)

	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	db.Create(&s)
	return c.JSON(http.StatusCreated, s)
	
}

