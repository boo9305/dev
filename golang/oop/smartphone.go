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
    Model string
    Phone
    Camera
}

func main() {
    myPhone := SmartPhone{
        Model : "Android-007",
        Phone : Phone{Model : "ioph-0001"},
        Camera: Camera{Model : "huca-0002"},
    }
    myPhone.TakePicture()
    myPhone.Call("101-2222-3333")
    fmt.Println(myPhone.Model)
    fmt.Println(myPhone.Phone.Model)
    fmt.Println(myPhone.Camera.Model)
}



