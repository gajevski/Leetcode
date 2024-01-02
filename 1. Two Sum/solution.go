func twoSum(nums []int, target int) []int {
    for i := 0; i < len(nums); i++ {
        for j := i + 1; j < len(nums); j++ {
            if nums[i] + nums[j] == target {
                solution := []int{i, j}
                return solution;
            }
        }    
    }
    return []int{};
}
