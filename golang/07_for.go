package main


func main () {

    sum := 0
    for i:=1 ; i<=100 ; i++ {
        sum += i;
    }

    println(sum)

    n := 1
    for n < 100 {
     n *=2
    }
    println(n)

    names:= []string{"kim", "lee", "park"}

    for index, name :=range names {
        println(index, name)
    }
    //can use  break, continue, goto

    i := 0
    L1:
    for {
        for {
            if i == 0 {
                break L1 
            }
        }
    }

}
