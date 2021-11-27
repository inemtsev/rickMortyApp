package data

import "time"

type CharacterResult struct {
	Info struct {
		Count int    `json:"count"`
		Pages int    `json:"pages"`
		Next  string `json:"next"`
		Prev  string `json:"prev"`
	} `json:"info"`

	Results []struct {
		Id      int    `json:"id"`
		Name    string `json:"name"`
		Status  string `json:"status"`
		Species string `json:"species"`
		Type    string `json:"type"`
		Gender  string `json:"gender"`
		Origin  struct {
			Name string `json:"name"`
			Url  string `json:"url"`
		} `json:"origin"`
		Location struct {
			Name string `json:"name"`
			Url  string `json:"url"`
		} `json:"location"`
		Image   string    `json:"image"`
		Episode []string  `json:"episode"`
		Url     string    `json:"url"`
		Created time.Time `json:"created"`
	} `json:"results"`
}
