arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
]

def move_left(arr):
    for row in arr:
        for i in range(len(row)):
            if i + 1 >= len(row):
                row[i] = 0
            else:
                row[i] = row[i + 1]
    print("left arr", arr)


def move_right(arr):
    for row in arr:
        for i in range(len(row) - 1, -1, -1):
            if i == len(row) - 1:
                row[i] = 0
            else:
                row[i] = row[i - 1]
    print("right arr", arr)

def move_up(arr):
    for col in range(len(arr[0])):
        for row in range(len(arr) - 1):
            arr[row][col] = arr[row + 1][col]
        arr[len(arr) - 1][col] = 0
    print("up arr", arr)

def move_down(arr):
    for col in range(len(arr[0])):
        for row in range(len(arr) - 1, 0, -1):
            arr[row][col] = arr[row - 1][col]
        arr[0][col] = 0
    print("down arr", arr)

        
        


