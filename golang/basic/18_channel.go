package main


func main() {
    ch := make(chan int)
    go func() {
        ch <- 123
    }()

    var i int

    i = <- ch

    println(i)
    
    
    done := make(chan bool)
    go func() {
        for i :=0 ; i < 10 ; i++ {
            println(i)
        }
        done <- true
    }()

    <- done

}
