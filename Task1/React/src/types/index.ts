export interface Filter {
  Id?: string;
  Code?: number;
  ValueExact?: string;
  ValueIncluded?: string;
  Page: number;
  ItemsPerPage: number;
}

export interface CodeValueItem {
  id: string;
  code: number;
  value: string;
  orderNumber: number;
}

export type FilterNoPage = Omit<Filter, "Page">;
