package models

import (
	"time"
	"github.com/uedamasanari/ChristmasHackathon/database"
)

var db = database.Connect()

type Child struct {	
	Id int `gorm:"primaryKey:not null:autoIncrement" json:"id"`	
	Name string `gorm:"not null" json:"name"`
	SantaID int `gorm:"not null" json:"santa_id"`	
	CreatedAt time.Time `gorm:"autoCreateTime:int" json:"created_at"`	
	UpdatedAt time.Time `gorm:"autoUpdateTime:int" json:"updated_at"`	
}

func GetChildrenByParentID(santaID int) []Child {

	chl := []Child{}
	db.Raw("SELECT * FROM children WHERE santa_id = ?", santaID).Scan(&chl)
	return chl

}
