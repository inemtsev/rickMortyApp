package main

import (
	"eventslooped.com/rm/data"
	"github.com/gofiber/fiber/v2"
	"log"
)

func main() {
	app := fiber.New()
	rmClient := data.NewRmClient()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	app.Get("/getPopular", func(c *fiber.Ctx) error {
		page := c.Query("page")
		res, err := rmClient.GetCharacters(page)
		if err != nil {
			// log somewhere
		}

		return c.JSON(*res)
	})

	log.Fatal(app.Listen(":3001"))
}
