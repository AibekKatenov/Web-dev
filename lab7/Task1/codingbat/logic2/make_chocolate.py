def make_chocolate(small, big, goal):
    # Calculate the number of big bars needed
    big_needed = goal // 5

    # If we don't have enough big bars, use all of them
    if big_needed > big:
        big_needed = big

    # Calculate the remaining weight after using the big bars
    remaining = goal - big_needed * 5

    # Check if we can complete the package using the small bars
    if remaining <= small:
        return remaining
    elif remaining <= small + 4:
        return remaining - small
    else:
        return -1
