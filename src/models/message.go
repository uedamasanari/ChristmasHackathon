package models

import (
	"time"
)

type Message struct {	
	Id int `gorm:"primaryKey:not null:autoIncrement" json:"id"`	
	Present string `json:"present"`
	Message string `json:"message"`	
	ChildID int `json:"child_id"`	
	CreatedAt time.Time `gorm:"autoCreateTime:int" json:"created_at"`	
	UpdatedAt time.Time `gorm:"autoUpdateTime:int" json:"updated_at"`	
}


func GetMessageByChildID(childID int) Message {

	m := Message{}
	db.Raw("SELECT * FROM messages WHERE child_id = ?", childID).Scan(&m)
	return m

}
