//export namespace Config{

/**
 * 所有配置表的类定义
 * @warning 自动生成 请勿手动修改
 * @author l2xin
 */
interface IConfig{
	createByTuple(table:any);
}

/**
 * 如果希望一次把表全部加载
 */
function InitAllConfig(){
	ConfigManager.GetAllConfig<TestCfg>(TestCfg);
	ConfigManager.GetAllConfig<SkillCfg>(SkillCfg);
}

/**
 * 测试配置表
 */
class TestCfg implements IConfig {
	/**这是id */
	public id: number;
	/**这是名字 */
	public name: string;

	createByTuple(jsonTable:any){
		this.id = jsonTable.id;
		this.name = jsonTable.name;
	}
}

/**
 * 测试技能配置表
 */
class SkillCfg implements IConfig {
	/**这是id */
	public id: number;
	/**这是名字 */
	public skillName: string;

	createByTuple(jsonTable:any){
		this.id = jsonTable.id;
		this.skillName = jsonTable.skillName;
	}
}

//}

