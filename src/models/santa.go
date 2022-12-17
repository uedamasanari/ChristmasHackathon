package models

import (
	"time"
)

type Santa struct {	
	Id int `gorm:"primaryKey:not null:autoIncrement" json:"id"`	
	EmailAddress string `gorm:"not null:unique" json:"email_address"`
	Password string `gorm:"not null" json:"password"`	
	CreatedAt time.Time `gorm:"autoCreateTime:int" json:"created_at"`	
	UpdatedAt time.Time `gorm:"autoUpdateTime:int" json:"updated_at"`	
}
