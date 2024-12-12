import utils

def callback(str_one_line):
    res = str_one_line
    ver_info = ''
    if 'version' in str_one_line and '"' not in str_one_line:
        arr = res.split('.')
        ver_info += arr[0][:len(arr[0])-1]
        ver_info += '"'
        ver_info += arr[0][len(arr[0])-1:]
        ver_info += '.'
        ver_info += arr[1][:1]
        ver_info += '",'
        print(ver_info)
        res = ver_info
    res += '\n'
    return res


if __name__ == '__main__':
    utils.OperateFile.open_and_read('', callback)
