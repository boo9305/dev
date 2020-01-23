package main


import (
    "fmt"
    "os"
    "bufio"
)
func check (err error) {
    if err != nil {
        panic(err)
    }
}
func ScanFile(file_name string) {
    file , err := os.Open(file_name)
    check(err)

    scanner := bufio.NewScanner(file)
    buf := make([]byte, 1024)
    maxTokenSize := 1024 *1024 *1024
    scanner.Buffer(1024, maxTokenSize)
    
    for scanner.Scan() {
        _ = scanner.Text()
    }
}
