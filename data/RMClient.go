package data

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type RMClient struct {
	Characters map[string]CharacterResult
}

func NewRmClient() *RMClient {
	return &RMClient{}
}

func (client *RMClient) GetCharacters(page string) (*CharacterResult, error) {
	if client.Characters == nil {
		client.Characters = make(map[string]CharacterResult, 20)
	}

	val, ok := client.Characters[page]
	if ok {
		return &val, nil
	}

	apiResult, err := getApiCharacters(page)
	if err != nil {
		return nil, err
	}

	client.Characters[page] = *apiResult
	return apiResult, nil
}

func getApiCharacters(page string) (*CharacterResult, error) {
	res, err := http.Get(fmt.Sprintf("https://rickandmortyapi.com/api/character?page=%s", page))
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	bodyBytes, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}

	var result CharacterResult
	json.Unmarshal(bodyBytes, &result)

	return &result, nil
}


