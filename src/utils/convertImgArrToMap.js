const convertImgDataToMap = (imgData) => {
  return imgData.reduce(function (map, obj) {
    map[obj.name] = obj;
    return map;
  }, {});
};

export default convertImgDataToMap;
