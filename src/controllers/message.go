package controllers

import (

	"strconv"
	"net/http"
	"github.com/labstack/echo/v4"

	"github.com/uedamasanari/ChristmasHackathon/models"
)


func GetMessageByChildID(c echo.Context) error {

	lock.Lock()
	defer lock.Unlock()

	pcid := c.Param("child_id")
	cid, _ := strconv.Atoi(pcid)

	m := models.GetMessageByChildID(cid)
	return c.JSON(http.StatusOK, m)

}

func UpdateMessageByChildID(c echo.Context) error {

	lock.Lock()
	defer lock.Unlock()

	pcid := c.Param("child_id")
	cid, err := strconv.Atoi(pcid)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	m_ := models.Message{}
	err = c.Bind(&m_)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	
	m := models.GetMessageByChildID(cid)
	m.Present = m_.Present
	m.Message = m_.Message
	db.Save(&m)

	return c.JSON(http.StatusOK, m)
}
