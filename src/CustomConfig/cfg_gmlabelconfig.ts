
/**
 * 标签页详情
 */
class cfg_gmlabelconfig implements IConfig {
    /**类型 */ 
    public id: any; 
    /**标签页名称 */ 
    public name: any; 

    createByTuple(jsonTable:any){
        this.id = jsonTable.id;
        this.name = jsonTable.name;
    }
}

