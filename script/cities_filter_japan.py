import os

current_path = os.path.dirname(__file__)

cities_json_file = current_path + "/data/gazetteer-of-japan.json"

# load local data
cities_dict = utils.OperateFile.load_dict_from_file(cities_json_file)
# print(cities_dict)


def filter():
    res = []
    for obj in cities_dict:
        if obj["class"] != "Municipality":
            continue

        split_list = ["都", "道", "府", "県", "市", "町", "村"]

        name = obj["kanji"]
        for sp in split_list:
            if name.endswith(sp):
                name = name[: -len(sp)]
                break

        new_obj = {
            "name": name,
            "name_en": obj["roman"].split(" ")[0],
            "kanji": obj["kanji"],
            "kana": obj["kana"],
            "roman": obj["roman"],
            "lat": obj["lat"],
            "lng": obj["lng"],
        }
        res.append(new_obj)
    return res


f_data = filter()

output = current_path + "/.augus_output"

utils.OperateFile.save_dict_to_file(f_data, output)
