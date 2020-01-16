package main


import (
"fmt"
"io/ioutil"
"time"
"os"
"bufio"
"io"
)



func ReadOri() {
    start := time.Now()
    fmt.Println("ReadOri ...")
    file, err := os.Open("file.txt")
    if err != nil {
        fmt.Print(err)
        return
    }

    buff := make([]byte, 1024)

    for {
        cnt,err := file.Read(buff)
        if err != nil && err != io.EOF {
            return
        }

        if cnt == 0{
            break
        }

        fmt.Println(buff[:cnt])

    }

    end := time.Since(start)
    fmt.Println(end)

    defer file.Close()
}

func ReadScanner() {
    start := time.Now()
    fmt.Println("ReadScanner ...")
    file, err := os.Open("file.txt")
    if err != nil {
        fmt.Print(err)
    }

    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }

    if err := scanner.Err() ; err!=nil {
        fmt.Print(err)
    }

    end := time.Since(start)
    fmt.Println(end)
}

func ReadIoUtil() {
    q
    fmt.Println("ReadIoUtil ...")
    start := time.Now();

    b, err := ioutil.ReadFile("file.txt")
    if err != nil {
        fmt.Print(err)
    }
    //defer  b.close()
    //fmt.Println(b)
    str := string(b)
    fmt.Println(str)

    end := time.Since(start)
    
    fmt.Println(end)
}

func main() {
    ReadIoUtil()

    ReadScanner()

    ReadOri()
}
