package main


import "fmt"

func main() {
    var a []int
    a = []int{1,2,3}
    a[1] = 10
    fmt.Println(a)

    s := make([]int, 5, 10)
    println(len(s), cap(s))


    s2 := []int{1,2,3,4,5}
    s2 = s2[2:5]

    s2 = append(s2,10)
    fmt.Println(s2)

    
    s3 := make([]int, 0,3)

    for i := 1 ;i<=15;i++ {
        s3 = append(s3,i)
        fmt.Println(len(s3), cap(s3))
    }

    s4 := []int{1,2,3}
    s5 := []int[4,5,6}
    
    s4 = append(s4, s5...)



}
