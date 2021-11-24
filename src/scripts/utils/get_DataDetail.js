import restoSource from '../data/resto-source';
import UrlParser from '../routes/url-parser';

const getDataDetail = () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const resto = restoSource.mydetail(url.id);
  return resto;
};

const getDataId = () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const dataId = url.id;
  return dataId;
};

export { getDataDetail, getDataId };
