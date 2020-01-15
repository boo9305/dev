package main


func main () {
    var idMap map[int]string
    if idMap == nil {
        println("map nil")
    }

    var m map[int]string

    m = make(map[int]string)

    m[901] = "apple"
    m[134] = "grape"

    str := m[134]
    println(str)

    noData := m[999]

    if noData == "" {
        println(noData)
        println("no data")
    }

    delete(m, 901)

    val , exists := m[901]
    if !exists {
        println("no 901", val, exists)
    }

    for key, val := range m {
        println(key,val)
    }
}
