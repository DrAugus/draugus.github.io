import os
import utils
import op_file

gid = 8

current_path = os.path.dirname(__file__)
json_name = "mhy8char"
json_file = current_path + f"/auto/{json_name}.json"
json_info = op_file.load_dict_from_file(json_file)

JS_CHAR = json_info["JS_CHAR"]
JS_CAMP = json_info["JS_CAMP"]


def set_js_script(json_name):
    js = f"""import {json_name} from "./{json_name}.json" assert {{ type: 'json' }};
console.dir({json_name}, {{ depth: null }});
"""

    js_path = current_path + f"/auto/{json_name}.js"
    op_file.write_file_anything(js, js_path)
    return js_path


def execute_js(json_name):
    handle_js_path = set_js_script(json_name)
    handle_js_output = current_path + f"/auto/{json_name}.temp"

    os.system(f"echo -n > {handle_js_output}")
    os.system(f"node {handle_js_path} >> {handle_js_output}")
    return handle_js_output


def modify_char_ts_file():

    json_name = "mhy8charOnly"
    op_file.save_dict_to_file(JS_CHAR, current_path + f"/auto/{json_name}.json")
    file_path = execute_js(json_name)

    ts_insert = """import { Camp, Element, Weapon } from "./utils";

export const CHARACTER = """

    op_file.prepend_to_file(file_path, ts_insert)

    get_char_ts = current_path + f"/auto/{json_name}.ts"

    def camp_modify(line_str):
        camps = JS_CAMP.keys()
        for camp in camps:
            if camp in line_str:
                new_line = line_str.replace(f"'{camp}'", f"Camp.{camp}")
                return new_line

        # TODO temp
        # "ele": "Element.ether",
        # "weapon": "Weapon.anomaly",
        tmp_str = ["Element.ether", "Weapon.anomaly"]
        for tmp in tmp_str:
            if tmp in line_str:
                new_line = line_str.replace(f"'{tmp}'", f"{tmp}")
                return new_line

        return line_str

    op_file.open_and_read_no_strip(file_path, camp_modify, get_char_ts)


# ALL INFO
execute_js(json_name)

modify_char_ts_file()
