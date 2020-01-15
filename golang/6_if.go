package main


func main() {
    
    var i  int = 3

    if  i == 2 {
        println("same 2")
    } else if i > 2 {
        println("bigger than 2")
    } else {
        println("lower than 2")
    }
   
    if val := 2 * i ; val > 2 {
        println("big val")
    }

    var name string

    // go is auto break in switch
    switch i {
    case 3:
        name= "3"
        fallthrough 
    case 4:
        name = "4"

    default:
        name = "other"
    }

//    switch i.(type) {
//    case int : 
//        println("int")
//    case bool :
 //       println("bool")
   // }

    println(name)

    println("if")
}
