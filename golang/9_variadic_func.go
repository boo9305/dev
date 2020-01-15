package main


func main() {
    say("This", "is", "a", "book")

}

func say(msg ...string) {
    for index , s:=range msg {
        println(index, s)
    }
}
