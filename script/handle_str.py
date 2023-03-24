import op_file


def temp_op(line_str):
    src_line_str = line_str
    line_str = line_str[1:]
    line_arr = line_str.split('|', 1)
    # res = '[' + line_arr[0] + ']: ./china/\n'
    # res = '|[' + line_arr[0] + ']['+ line_arr[0] +']|' + line_arr[1] 

    res = '\'' + src_line_str + '\','

    res += '\n'
    return res


def invoke_temp_op():
    op_file.open_and_read('', temp_op)


all_feature = '\n=========*****=========\n' \
    'What do you want to do? \n' \
    '   1: invoke_temp_op\n' \
    '   0: nothing\n' \
    'default invoke_temp_op\n' \
    '=========*****=========\n'

if __name__ == '__main__':
    print(all_feature)
    while 1:
        judge = input()
        if judge == '1':
            invoke_temp_op()
            break
        elif judge == '2':
            break
        elif judge == '3':
            break
        elif judge == '4':
            break
        elif judge == '5':
            break
        elif judge == '6':
            break
        elif judge == '7':
            break
        elif judge == '0':
            break
        else:
            print('default handle')
            invoke_temp_op()
            break
