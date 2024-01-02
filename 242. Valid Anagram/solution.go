import (
	"fmt"
	"sort"
)

func isAnagram(s string, t string) bool {
    a := sortString(s);
    b := sortString(t);
    return a == b;
}

func sortString(s string) string {
    r := []rune(s)
    fmt.Println("rune:", r)
    sort.Slice(r, func(i, j int) bool {
        return r[i] < r[j]
    })
    return string(r)
}
