import axios from "axios";
import { CodeValueItem, Filter, FilterNoPage } from "../types";

axios.defaults.baseURL = "/api";

const prepareUrlParams = (filter: Filter) => {
  const requestParams = [
    filter.Id && `Id=${filter.Id}`,
    filter.Code && `Code=${filter.Code}`,
    filter.ValueExact && `Code=${filter.ValueExact}`,
    filter.ValueIncluded && `Code=${filter.ValueIncluded}`,
    `Page=${filter.Page ?? 1}`,
    `ItemsPerPage=${filter.ItemsPerPage ?? 10}`,
  ];
  return requestParams.filter((x) => !!x).join("&");
};

export const getItems = (filter: Filter) =>
  axios
    .get(`CodeValueObjects?${prepareUrlParams(filter)}`)
    .then((response) => Promise.resolve(response.data as Array<CodeValueItem>))
    .catch((error) => {
      console.error(error);
      throw error;
    });

export const updateData = (jsonData: string) =>
  axios
    .post("CodeValueObjects", jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

export const getPagesCount = (filter: FilterNoPage) =>
  axios
    .get(
      `CodeValueObjects/PageCount?${prepareUrlParams({ ...filter, Page: 0 })}`
    )
    .then((response) => Promise.resolve(response.data as number))
    .catch((error) => {
      console.error(error);
      throw error;
    });
