package main

import "fmt"


type Wiki interface {
    Parser(string) string
}

type MediaWiki struct {
    Type string
}

func (m MediaWiki) Parser(a string) string {
    return "Moniwiki" + a
}

type MarkDown struct {
    Type string
}

func (m MarkDown) Parser(a string) string {
    return "Markdown" + a
}

func main() {
    md := MarkDown{Type : "MarkDown"}
    me := MediaWiki{Type : "MonWiki"}

    WikiEngine := make(map[string]Wiki ,2)
    WikiEngine["MarkDown"] = md
    WikiEngine["MonWiki"] = me

    for _ , value := range WikiEngine {
        fmt.Println(value.Parser("Text Data"))
    }

}
