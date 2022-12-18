package controllers

import (

	"strconv"
	"net/http"
	"github.com/labstack/echo/v4"

	"github.com/uedamasanari/ChristmasHackathon/models"
)

func CreateChild(c echo.Context) error {

	lock.Lock()
	defer lock.Unlock()
	
	ch := models.Child{}
	err := c.Bind(&ch)

	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	db.Create(&ch)

	m := models.Message{ChildID: ch.Id}
	db.Create(&m)

	return c.JSON(http.StatusCreated, ch)
	
}

func GetChildrenByParentID(c echo.Context) error {

	lock.Lock()
	defer lock.Unlock()

	ppid := c.Param("parent_id")
	pid, _ := strconv.Atoi(ppid)

	chl := models.GetChildrenByParentID(pid)
	return c.JSON(http.StatusOK, chl)

}


func UpdateChild(c echo.Context) error {

	lock.Lock()
	defer lock.Unlock()

	pid := c.Param("id")
	id, err := strconv.Atoi(pid)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	ch := models.Child{}
	db.First(&ch, id)

	ch_ := models.Child{}
	err = c.Bind(&ch)
	
	ch.Name = ch_.Name
	db.Save(&ch)

	return c.JSON(http.StatusOK, ch)
}


func DeleteChild(c echo.Context) error {

	lock.Lock()
	defer lock.Unlock()

	pid := c.Param("id")
	id, err := strconv.Atoi(pid)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	
	ch := models.Child{}
	db.Delete(&ch, id)
	return c.JSON(http.StatusNoContent, ch)
}



