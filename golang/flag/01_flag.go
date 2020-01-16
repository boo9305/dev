package main


import (
    "fmt"
    "flag"
)

func main() {
    wordPtr := flag.String("word", "foor", "a string")
    numPtr := flag.Int("num", 42, "an int")
    boolPtr := flag.Bool("bool", false , "a bool")

//    var svar string
//    flag.StringVar(&svar, "svar", "bar", "a string var")


    flag.Parse()


    fmt.Println("word :" , *wordPtr)
    fmt.Println("num :" , *numPtr)
    fmt.Println("bool :" , *boolPtr)
}



