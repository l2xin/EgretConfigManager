/**
 * GM命令
 */
class cfg_gmconfig implements IConfig {
    /**序号 */ 
    public id: any; 
    /**名称 */ 
    public name: any; 
    /**标签页 */ 
    public kind: any; 
    /**关键字 */ 
    public command: any; 
    /**参数 */ 
    public para: any; 

    createByTuple(jsonTable:any){
        this.id = jsonTable.id;
        this.name = jsonTable.name;
        this.kind = jsonTable.kind;
        this.command = jsonTable.command;
        this.para = jsonTable.para;
    }
}

