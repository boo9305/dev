package main


import "log"
import "os"

var myLogger *log.Logger

func main() {
    log.Println("Logging")

    myLogger = log.New(os.Stdout, "INFO : ", log.LstdFlags)

    myLogger.Print("Test")
    myLogger.Println("End of Program")
}



