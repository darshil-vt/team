import sys
import json
from PIL import Image

data = "Images/top_copper.png"
dataj = "Images/top_copper.jpeg"; 

# data = json.loads(sys.argv[1])
# # print(data['name'])
# # data1 = {"name":"John", "age":30, "city":"New York"}
# # print(json.dumps(data1))

# def test(data):
#     data1 = data['name']
#     print(data1)
#     return data1

# d=test(data)
# print(d)

im1 = Image.open(data)
rgb = im1.convert('RGB')
rgb.save(dataj)