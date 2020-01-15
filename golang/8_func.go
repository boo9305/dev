package main

func say(msg string){
    println(msg)
}

func say2(msg *string) {
    println(*msg)
    *msg = "changed"
}

func sum (nums ...int) (int,int) {
    s := 0
    index := 0
    for _,n := range nums {
        s +=n
        index++
    }
    return s, index
}

func main () {
    
    msg := "Hello"
    say(msg)

    say2(&msg)
    println(msg)

    total , index := sum(1,2,3,4,5)
    println(total, index)
}
