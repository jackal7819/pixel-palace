export interface IFilterItem {
  label: string,
  value: string
}

export interface IFilterSection {
  title?: string,
  withClose?: boolean;
  withScroll? :boolean;
}

export interface IFilter {
  onClose: () => void;
}

export interface ICheckboxGroup {
  name: string,
  options: IFilterItem[],
}