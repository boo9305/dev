package main

import "fmt"


type Wiki interface() {
    Parser(string) string
}

type MediaWiki struct {
    Type string
}

