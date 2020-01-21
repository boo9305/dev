package main


type Rectangle struct {
    Name string
    Weight, Height float64
}

func NewRectangle() *Rectangle {
    return &Rectangle{Name : "boo" , Weight : 1.0 , Height : 2.0 }
}

func (r *Rectangle) SetWidth(width float64) {
    r.Weight = width
}


func main() {
    rect := NewRectangle();
    println(rect.Weight)
}   



