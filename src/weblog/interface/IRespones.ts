interface IRespones {
  pagesize?: number; //当前页数
  pagenumber?: number; //当前页码
  msg: string;
  weblogdata: any; //全部数据
  total: number; //总共多少条
}
export { IRespones };
