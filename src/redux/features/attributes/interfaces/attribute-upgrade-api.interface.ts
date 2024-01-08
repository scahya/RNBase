export interface IAttributeInfoUpgrade {
  status: string;
  code: number;
  result: Result;
  data: Datas;
}

export interface Result {
  info: Info[];
}

export interface Datas {
  kaspro_desc: Description[];
  banktransfer_desc: Description[];
}

export interface Info {
  title: string;
  description: Description[];
}

export interface Description {
  parent: string;
  child: string[];
}
