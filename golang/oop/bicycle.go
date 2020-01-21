package main

import (
    "fmt"
)

type Bicycle struct {

}

func (b Bicycle) Spare() {
    fmt.Println("bicycle share")
}

func (b Bicycle) Run() {
    fmt.Println("bicycle run")
}

type MountainBike struct {
    Bicycle
}

func (m MountainBike) Run() {
    fmt.Println("mountain run")
}

func (m MountainBike) Jump() {
    fmt.Println("mountain jump")
}

func main() {
    mbike := MountainBike{}
    mbike.Run()
    mbike.Spare()
    mbike.Jump()

}
