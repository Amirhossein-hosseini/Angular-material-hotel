export class nameCoutry{
  constructor(
    public letter:string,
    public names:string[]
  ){}
}

export const _filter = (opt:string[],value:string):string[] =>{
  const filterValue =value.toLowerCase();
  return opt.filter(item =>item.toLowerCase().includes(filterValue))
}
