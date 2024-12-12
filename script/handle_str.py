import utils

def temp_op(line_str):

    if not len(line_str):
        return line_str + '\n'

    src_line_str = line_str
    line_str = line_str[1:]
    line_arr = line_str.split('|', 1)
    # res = '[' + line_arr[0] + ']: ./china/\n'
    # res = '|[' + line_arr[0] + ']['+ line_arr[0] +']|' + line_arr[1]

    # res = '\'' + src_line_str + '\','
    # res = '|'+src_line_str + '|||||'

    # res = src_line_str.split('省')[0].split('市')[0]

    # res = composeSide(src_line_str)

    # 北京大学 985:1999年 北京

    uni = src_line_str.split('学')[0] + '学'
    place = src_line_str.split('年')[1]

    year = src_line_str.split(':')[1].split('年')[0] + '年'

    temp = '"PKU": {"id":"PKU","name":"' + uni + \
        '", "abbr":"", "en":"", "985":"' + year + \
        '","place":"' + place + '","tag":"'+'985,211"},'

    res = temp

    res += '\n'
    return res


def composeSide(line_str):
    text = line_str
    link_pref = '/language'
    link_suffix = '/suffix'
    res = '{ text: \'' + text + '\', link: \'' + \
        link_pref + link_suffix+'\' },'
    return res


def invoke_temp_op():
    utils.OperateFile.open_and_read('', temp_op)


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
