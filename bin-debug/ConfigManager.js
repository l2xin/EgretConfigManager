var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * ConfigManager.ts
 * @author l2xin
 */
var ConfigManager = (function () {
    function ConfigManager() {
    }
    /**
     * 读取某个表中某一行的数据
     * @param tType T类
     * @param key 下标
     * @example let testCfg:TestCfg = GetConfigByKey<TestCfg>(TestCfg, 1001);
     */
    ConfigManager.GetConfigByKey = function (tType, key) {
        var table = ConfigManager.GetAllConfig(tType);
        if (table == null)
            return null;
        var result = table[String(key)];
        return result;
    };
    /**
     * 读取某个表中所有数据
     * @param tType T类
     * @return
     * @example let allTestCfg = GetAllConfig<TestCfg>(TestCfg);
     */
    ConfigManager.GetAllConfig = function (tType) {
        var configName = tType["name"];
        if (this.m_allCfgDict[configName] == null) {
            //加载单张表 用到再加载
            this.m_allCfgDict[configName] = {};
            var jsonTable = RES.getRes(configName + "_json");
            if (jsonTable != null) {
                for (var key in jsonTable) {
                    var oneCfg = new tType();
                    oneCfg.createByTuple(jsonTable[key]);
                    this.m_allCfgDict[configName][key] = oneCfg;
                }
            }
        }
        return this.m_allCfgDict[configName];
    };
    ConfigManager.m_allCfgDict = {};
    return ConfigManager;
}());
__reflect(ConfigManager.prototype, "ConfigManager");
//# sourceMappingURL=ConfigManager.js.map