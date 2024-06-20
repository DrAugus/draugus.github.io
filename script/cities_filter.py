import os
import op_file

current_path = os.path.dirname(__file__)

cities_json_file = current_path + "/data/cities.json"

# load local data
cities_dict = op_file.load_dict_from_file(cities_json_file)
# print(cities_dict)


def filter(country: str):
    res = []
    for obj in cities_dict:
        if obj["country"] == country:
            res.append(obj)
    return res


f_data = filter("JP")

output = current_path + "/.augus_output"

op_file.save_dict_to_file(f_data, output)
