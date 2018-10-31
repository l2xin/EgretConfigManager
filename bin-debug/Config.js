//export namespace Config{
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 如果希望一次把表全部加载
 */
function InitAllConfig() {
    ConfigManager.GetAllConfig(TestCfg);
    ConfigManager.GetAllConfig(SkillCfg);
}
/**
 * 测试配置表
 */
var TestCfg = (function () {
    function TestCfg() {
    }
    TestCfg.prototype.createByTuple = function (jsonTable) {
        this.id = jsonTable.id;
        this.name = jsonTable.name;
    };
    return TestCfg;
}());
__reflect(TestCfg.prototype, "TestCfg", ["IConfig"]);
/**
 * 测试技能配置表
 */
var SkillCfg = (function () {
    function SkillCfg() {
    }
    SkillCfg.prototype.createByTuple = function (jsonTable) {
        this.id = jsonTable.id;
        this.skillName = jsonTable.skillName;
    };
    return SkillCfg;
}());
__reflect(SkillCfg.prototype, "SkillCfg", ["IConfig"]);
//} 
//# sourceMappingURL=Config.js.map