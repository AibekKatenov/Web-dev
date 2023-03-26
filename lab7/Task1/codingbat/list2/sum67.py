def sum67(nums):
    total = 0
    add = True
    for num in nums:
        if num == 6:
            add = False
        if add:
            total += num
        if num == 7:
            add = True
    return total
