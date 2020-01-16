package main

import (
    "fmt"
    "os"
    "bufio"
    "flag"
    "log"
    "io/ioutil"
)



func ReadFile(path string) {
    file, err := os.Open(path)

    if err != nil {
        panic(err)
    }

    scanner := bufio.NewScanner(file)

    i:=0

    for scanner.Scan() {
        var str string = scanner.Text()
        _ = str
        i++
    }
    fmt.Println(path, i)

    defer file.Close()

}

func getDirFiles(path string) []string {
    files, err := ioutil.ReadDir(path)
    if err != nil {
        panic(err)
    }

    var s[] string
    for _, f := range files {
        if f.Name()[0] == '.' {
            continue
        }
        s = append(s,f.Name())
    }
    return s
}

func Args() string {
    pathPtr := flag.String("path", "./", "dir path")
    flag.Parse()
    fmt.Println("path : ", *pathPtr)
    return *pathPtr
}

func main() {
    log.Println("start\n")
    path := Args()
    files := getDirFiles(path)
    for i , file := range files {
        fmt.Println(i,file)
        file  = path + "/" + file
        ReadFile(file)
    }

}










