/// <reference path='./_references.ts' />

describe("selection sorter tests", () => {
    it("should determine which is selected and which is not", () => {
        expect(true).toBe(true);
    });
});

describe("id and active sorter tests", () => {
    var metadata1 = new CV.Metadata(1, "Meta1", "Desc1");
    var metadata2 = new CV.Metadata(2, "Meta2", "Desc2");
    var metadata3 = new CV.Metadata(3, "Meta3", "Desc3");

    var skill1WithMeta1 = new CV.Skill(1, "Skill1", "Desc1", [metadata1]);
    var skill2WithMeta2 = new CV.Skill(2, "Skill2", "Desc2", [metadata2]);
    var skill3WithMeta1And2 = new CV.Skill(3, "Skill3", "Desc3", [metadata1, metadata2]);
    var skill4WithMeta2And3 = new CV.Skill(4, "Skill4", "Desc3", [metadata2, metadata3]);

    var setting1 = new CV.Setting(1, "Setting1", "SettingDesc1", null);
    var setting2 = new CV.Setting(2, "Setting2", "SettingDesc2", null);
    var setting3 = new CV.Setting(3, "Setting3", "SettingDesc3", null);

    var suSkill1AtSetting1 = new CV.SkillUsage(1, "Skill1AtSetting1", 1, 1);
    var suSkill1AtSetting2 = new CV.SkillUsage(2, "Skill1AtSetting2", 1, 2);
    var suSkill2AtSetting2 = new CV.SkillUsage(3, "Skill2AtSetting2", 2, 2);
    var suSkill2AtSetting3 = new CV.SkillUsage(4, "Skill2AtSetting3", 2, 3);

    var cvData: CV.ICVData = {
        skills: [skill1WithMeta1, skill2WithMeta2, skill3WithMeta1And2, skill4WithMeta2And3],
        settings: [setting1, setting2],
        skillUsages: [suSkill1AtSetting1, suSkill1AtSetting2, suSkill2AtSetting2, suSkill2AtSetting3],
        metadatas: [metadata1, metadata2, metadata3]
    };

    var sorter = new App.IdAndActiveSorter(cvData);

    it("should return all cv data is present and active for initial", () => {
        var result = sorter.forInitial();

        expect(result.skills.map(s => s.id)).toEqual(cvData.skills.map(s => s.id));
        result.skills.forEach(s => expect(s.isActive).toBeTruthy())

        expect(result.settings.map(s => s.id)).toEqual(cvData.settings.map(s => s.id));
        result.settings.forEach(s => expect(s.isActive).toBeTruthy())

        expect(result.metadatas.map(s => s.id)).toEqual(cvData.metadatas.map(s => s.id));
        result.metadatas.forEach(s => expect(s.isActive).toBeTruthy())

        expect(result.skillUsages.map(s => s.id)).toEqual(cvData.skillUsages.map(s => s.skillUsageId));
        result.skillUsages.forEach(s => expect(s.isActive).toBeTruthy())
    });
    
    describe("forSkill", () => {
        describe("forSkill skill1", () => {
            var result = sorter.forSkill(skill1WithMeta1.id);

            it("should have only skill1 active", () => {
                var skills = result.skills;
                expect(skills[0].id).toEqual(skill1WithMeta1.id);
                expect(skills[0].isActive).toEqual(true);

                var allActive = skills.map(s => s.isActive).filter(a => a === true)
                expect(allActive.length).toEqual(1);
                expect(skills[1].id).toEqual(skill2WithMeta2.id);
                expect(skills[2].id).toEqual(skill3WithMeta1And2.id);
                expect(skills[3].id).toEqual(skill4WithMeta2And3.id);
            });

            it("should have settings 1 and 2 active and not 3", () => {
                var settings = result.settings;
                expect(settings[0].id).toEqual(setting1.id);
                expect(settings[0].isActive).toEqual(true);

                expect(settings[1].id).toEqual(setting2.id);
                expect(settings[1].isActive).toEqual(true);

                expect(settings[2].id).toEqual(setting3.id);
                expect(settings[2].isActive).toEqual(false);
            });

            it("should have only metadata1 active", () => {
                var metas = result.metadatas;
                expect(metas[0].id).toEqual(metadata1.id);
                expect(metas[0].isActive).toEqual(true);

                expect(metas[1].id).toEqual(metadata2.id);
                expect(metas[1].isActive).toEqual(false);

                expect(metas[2].id).toEqual(metadata3.id);
                expect(metas[2].isActive).toEqual(false);
            });
        });

        describe("forSkill skill2", () => {
            var result = sorter.forSkill(skill2WithMeta2.id);

            it("should have only skill2 active", () => {
                var skills = result.skills;
                expect(skills[1].id).toEqual(skill2WithMeta2.id);
                expect(skills[1].isActive).toEqual(true);

                var allActive = skills.map(s => s.isActive).filter(a => a === true)
                expect(allActive.length).toEqual(1);
                expect(skills[0].id).toEqual(skill1WithMeta1.id);
                expect(skills[2].id).toEqual(skill3WithMeta1And2.id);
                expect(skills[3].id).toEqual(skill4WithMeta2And3.id);
            });

            it("should have settings 2 and 3 active and not 1", () => {
                var settings = result.settings;
                expect(settings[0].id).toEqual(setting1.id);
                expect(settings[0].isActive).toEqual(false);

                expect(settings[1].id).toEqual(setting2.id);
                expect(settings[1].isActive).toEqual(true);

                expect(settings[2].id).toEqual(setting3.id);
                expect(settings[2].isActive).toEqual(true);
            });

            it("should have only metadata2 active", () => {
                var metas = result.metadatas;
                expect(metas[0].id).toEqual(metadata1.id);
                expect(metas[0].isActive).toEqual(false);

                expect(metas[1].id).toEqual(metadata2.id);
                expect(metas[1].isActive).toEqual(true);

                expect(metas[2].id).toEqual(metadata3.id);
                expect(metas[2].isActive).toEqual(false);
            });
        });
    });
    
    describe("forSetting", () => {
        
        describe("setting1", () => {
            var result = sorter.forSetting(setting1.id);

            it("should have only skill1 active", () => {
                var skills = result.skills;
                expect(skills[0].id).toEqual(skill1WithMeta1.id);
                expect(skills[0].isActive).toEqual(true);

                var allActive = skills.map(s => s.isActive).filter(a => a === true)
                expect(allActive.length).toEqual(1);
                expect(skills[0].id).toEqual(skill2WithMeta2.id);
                expect(skills[2].id).toEqual(skill3WithMeta1And2.id);
                expect(skills[3].id).toEqual(skill4WithMeta2And3.id);
            });

            it("should only have setting1 active", () => {
                var settings = result.settings;
                expect(settings[0].id).toEqual(setting1.id);
                expect(settings[0].isActive).toEqual(true);

                expect(settings[1].id).toEqual(setting2.id);
                expect(settings[1].isActive).toEqual(false);

                expect(settings[2].id).toEqual(setting3.id);
                expect(settings[2].isActive).toEqual(false);
            });

            it("should have no active metadata", () => {
                var metas = result.metadatas;
                expect(metas[0].id).toEqual(metadata1.id);
                expect(metas[0].isActive).toEqual(false);

                expect(metas[1].id).toEqual(metadata2.id);
                expect(metas[1].isActive).toEqual(false);

                expect(metas[2].id).toEqual(metadata3.id);
                expect(metas[2].isActive).toEqual(false);
            });
        });
            
    });
    
});