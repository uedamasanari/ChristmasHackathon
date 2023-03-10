package database

import (
	"os"
	"fmt"
	"time"
	"github.com/joho/godotenv"
  "gorm.io/driver/mysql"
  "gorm.io/gorm"
)

func Connect() *gorm.DB {

	err := godotenv.Load("database/.env")
	
	if err != nil {
		fmt.Printf("Could not load the .env file: %v", err)
	} 

	db_user := os.Getenv("DB_USER")
	db_password := os.Getenv("DB_PASSWORD")
	db_host := os.Getenv("DB_HOST")
	db_port := os.Getenv("DB_PORT")
	db_name := os.Getenv("DB_NAME")

  dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", db_user, db_password, db_host, db_port, db_name)
  

	count := 0
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true,
	})
  if err != nil {
    for {
      if err == nil {
        fmt.Println("")
        break
      }
      fmt.Print(".")
      time.Sleep(time.Second)
      count++
      if count > 180 {
        fmt.Println("")
        fmt.Println("Failed to connect to db")
        fmt.Println(err.Error())
      }
      db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
				DisableForeignKeyConstraintWhenMigrating: true,
			})
    }
  }

	if err != nil {
		fmt.Printf("Connection with database failed: %v", err)
	} 
	return db
}
