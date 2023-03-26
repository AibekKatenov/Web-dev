def is_close(a, b):
    return abs(a - b) <= 1

def is_far(a, b, c):
    return abs(a - b) >= 2 and abs(a - c) >= 2 and abs(b - c) >= 2

def close_far(a, b, c):
    if is_close(a, b):
        return is_far(a, b, c)
    elif is_close(a, c):
        return is_far(a, c, b)
    else:
        return False
