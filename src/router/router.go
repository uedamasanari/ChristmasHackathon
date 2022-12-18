package router


import (
	// "net/http"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	
	"github.com/uedamasanari/ChristmasHackathon/controllers"
)

func Initialize() *echo.Echo {
	e := echo.New()
	e.Use(middleware.Logger())
  e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	api := e.Group("/api")

	api.POST("/santa/new", controllers.CreateSanta)

	api.POST("/child/new", controllers.CreateChild)
	api.GET("/child/:parent_id", controllers.GetChildrenByParentID)
	api.PUT("/child/:id", controllers.UpdateChild)
	api.DELETE("/child/:id", controllers.DeleteChild)

	api.GET("/message/:child_id", controllers.GetMessageByChildID)
	api.PUT("/message/:child_id", controllers.UpdateMessageByChildID)

	return e

}

