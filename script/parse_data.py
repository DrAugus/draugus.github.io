import utils

# https://github.com/mwgg/Airports
FILENAME = f"{utils.get_project_root()}/script/airports.json"
py_get_json = utils.OperateFile.load_dict_from_file(FILENAME)

TS_DATA = f"{utils.get_project_root()}/script/ts_data"
ts_data = utils.OperateFile.load_dict_from_file(TS_DATA)


ret = []


def not_in_ts_data(iata):
    for item in ts_data:
        if item['code'] == iata:
            return False
    return True


for icao, item in py_get_json.items():
    if (item['country'] == 'CN' or item['country'] == 'HK' or item['country'] == 'TW' or item['country'] == 'KR' or item['country'] == 'JP' ) and not_in_ts_data(item['iata']) and item['iata'] != '':
        new_item = {
            'code': item['iata'],
            'name': item['name'],
            'nameLocal': '',
            'abbrZH': '',
            'city': item['city'],
            'region': item['country'],
            'longitude': item['lon'],
            'latitude': item['lat'],
        }
        ret.append(new_item)

OUTPUT = f"{utils.get_project_root()}/script/output_modified"
utils.OperateFile.save_dict_to_file(ret, OUTPUT)
