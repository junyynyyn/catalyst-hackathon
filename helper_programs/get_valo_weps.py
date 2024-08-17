import urllib.request
import json
import csv

with urllib.request.urlopen('https://valorant-api.com/v1/weapons/skins') as response:
    data = json.load(response)["data"]
    wanted_data = []
    for weapon in data:
        wanted_data.append(
            {
                "game": "valorant",
                "item_name": weapon["displayName"],
                "picture": weapon["displayIcon"],
                "price": 0
            }
        )
    with open('valorant_skins.csv', 'w', newline='') as csvfile:
        fieldnames = ['game','item_name','picture','price']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(wanted_data)
