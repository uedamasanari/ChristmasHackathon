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
	api.POST("/santas/new", controllers.CreateSanta)

	return e

}

