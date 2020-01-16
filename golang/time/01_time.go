package main


import (
"fmt"
"time"
)

func main() {

    startTime := time.Now()

    for i := 0 ; i < 1000; i++ {
        println("Hello")
    }
    elapsedTime := time.Since(startTime)

    fmt.Printf("run time : %s\n", elapsedTime)
}

