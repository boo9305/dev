package main

import (
    "fmt"
)

type Phone struct {
    Model string
}

func (p Phone) Call(num string) {
    fmt.Println("phone call...", num)
}

type Camera struct {
    Model string
}

func (c Camera) TakePicture() {
    fmt.Println("Click...")
}

// Embedding
type SmartPhone struct {
    Phone
    Camera
}

func main() {
    myPhone := SmartPhone{}
    myPhone.TakePicture()
    myPhone.Call("101-2222-3333")
}
