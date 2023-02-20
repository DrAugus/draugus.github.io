import os

project_path = os.path.realpath(os.path.dirname(__file__))
ls_dir = "../article/article/"

# str 为最终合并完成的 str 至少一行
def write_file(arr):
    if not len(arr) or not isinstance(arr, list) or arr[0].find('\n') == -1:
        print("str must be one more rows: ", arr)
        return
    with open("script/.augus_output", "w") as file:
        for aa in arr:
            file.write(aa)

def generate_content(arr):
    arr_res = []
    for aa in arr:
        new_str = f"{{ text: '{aa}', link: '/article/{aa}' }},\n"
        arr_res.append(new_str)
    write_file(arr_res)

def ls_current():
    cmd = f"cd {project_path}/{ls_dir} && ls | cut -d '.' -f 1"
    obj = os.popen(cmd)
    filename = obj.read().split('\n')
    # print(filename)
    generate_content(filename)
    

if __name__ == '__main__':
    ls_current()
    # generate_content()
