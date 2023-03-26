def sum13(nums):
    total = 0
    skip_next = False
    for i in range(len(nums)):
        if nums[i] == 13:
            skip_next = True
        elif not skip_next:
            total += nums[i]
        else:
            skip_next = False
    return total
