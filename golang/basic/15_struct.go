package main

import "fmt"

type person struct {
    name string
    age int

}

func newPerson() *person {
    p := person{}
    p.name = "kim"
    p.age = 10
    return &p
}

type Rect struct {
    width, height int
}

func (r Rect) area() int {
    return r.width * r.height
}

func (r *Rect) area2() int {
    r.width++
    return r.width * r.height
}

func main() {
    p :=person {}

    p.name = "Lee"
    p.age = 10

    // p = person{"Lee", 10}
    //p := person {name : "Lee", age : 10}

    fmt.Println(p)

    p2 := newPerson()
    fmt.Println(p2)

    rect := Rect{10,20}
    println(rect.area())
    println(rect.area2())

}
