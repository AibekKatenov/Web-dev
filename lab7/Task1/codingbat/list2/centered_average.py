def centered_average(nums):
    min_num = min(nums)
    max_num = max(nums)
    sum_nums = sum(nums) - min_num - max_num
    return sum_nums // (len(nums) - 2)
