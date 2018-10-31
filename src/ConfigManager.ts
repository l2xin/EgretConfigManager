


/**
 * ConfigManager.ts 
 * @author l2xin
 */
class ConfigManager{

	private static m_allCfgDict = {};
	
	/**
	 * 读取某个表中某一行的数据
	 * @param tType T类
	 * @param key 下标
	 * @example let testCfg:TestCfg = GetConfigByKey<TestCfg>(TestCfg, 1001);
	 */
	public static GetConfigByKey<T extends IConfig>(tType: {new(): T}, key: number): T {
		let table = ConfigManager.GetAllConfig<T>(tType);
		if (table == null)
			return null;

		let result = table[String(key)];
		
		return result;
	}

	/**
	 * 读取某个表中所有数据
	 * @param tType T类
	 * @return 
	 * @example let allTestCfg = GetAllConfig<TestCfg>(TestCfg);
	 */
	public static GetAllConfig<T extends IConfig>(tType: {new(): T}) :{[id: string]: T }{
		let configName: string = tType["name"];
		if(this.m_allCfgDict[configName] == null){
			//加载单张表 用到再加载
			this.m_allCfgDict[configName] = {};
			let jsonTable = RES.getRes(configName + "_json");
			if (jsonTable != null) {
				for(let key in jsonTable){
					let oneCfg = new tType();
					oneCfg.createByTuple(jsonTable[key]);
					this.m_allCfgDict[configName][key] = oneCfg;
				}
			}
		}
		return this.m_allCfgDict[configName];
	}

}