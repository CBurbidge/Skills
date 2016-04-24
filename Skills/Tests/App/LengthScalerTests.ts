/// <reference path='./_references.ts' />

describe("length scaler tests", () => {
    var metadata1 = new CV.Metadata(1, "Meta1", "Desc1");
    var metadata2 = new CV.Metadata(2, "Meta2", "Desc2");
    var metadata3 = new CV.Metadata(3, "Meta3", "Desc3");
    var metadata4 = new CV.Metadata(4, "Meta4", "Desc4");
    var metadata5 = new CV.Metadata(5, "Meta5", "Desc5");

    var setting1 = new CV.Setting(1, "Setting1", "SettingDesc1", new CV.DateRange(new Date(2016, 1), new Date(2016, 3)));
    var setting2 = new CV.Setting(2, "Setting2", "SettingDesc2", new CV.DateRange(new Date(2016, 3), new Date(2016, 6)));
    var setting3 = new CV.Setting(3, "Setting3", "SettingDesc3", new CV.DateRange(new Date(2016, 5), new Date(2016, 11)));
    
    describe("settings tests", () => {
        var precision = 0.05;
        describe("settings 1 and 2", () => {
            var scaler = new App.LengthScaler({
                skills: [], skillUsages: [], metadatas: [],
                settings: [setting1, setting2]
            });
            
            var result = scaler.getSettings();
            
            it("should have a first setting with a start of 0 and an end of 0.4", () => {
                var setting = result[0];
                expect(setting.start).toBeCloseTo(0, precision);
                expect(setting.end).toBeCloseTo(0.4, precision);
                expect(setting.id).toEqual(setting1.id);
            });
            
            it("should have a second setting with a start of 0.4 and an end of 1", () => {
                var setting = result[1];
                expect(setting.start).toBeCloseTo(0.4, precision);
                expect(setting.end).toBeCloseTo(1, precision);
                expect(setting.id).toEqual(setting2.id);
            });
        });
        
        describe("settings 1, 2 and 3", () => {
            var scaler = new App.LengthScaler({
                skills: [], skillUsages: [], metadatas: [],
                settings: [setting1, setting2, setting3]
            });
            
            var result = scaler.getSettings();
            
            it("should have a first setting with a start of 0 and an end of 0.2", () => {
                var setting = result[0];
                expect(setting.start).toBeCloseTo(0, precision);
                expect(setting.end).toBeCloseTo(0.2, precision);
                expect(setting.id).toEqual(setting1.id);
            });
            
            it("should have a second setting with a start of 0.2 and an end of 0.5", () => {
                var setting = result[1];
                expect(setting.start).toBeCloseTo(0.2, precision);
                expect(setting.end).toBeCloseTo(0.5, precision);
                expect(setting.id).toEqual(setting2.id);
            });
            
            it("should have a third setting with a start of 0.4 and an end of 1", () => {
                var setting = result[2];
                expect(setting.start).toBeCloseTo(0.4, precision);
                expect(setting.end).toBeCloseTo(1, precision);
                expect(setting.id).toEqual(setting3.id);
            });
        });
        
    });

    describe("metadata tests", () => {    
        describe("with 2 metadatas", () => {
            var scaler = new App.LengthScaler({
                skills: [], settings: [], skillUsages: [],
                metadatas: [metadata1, metadata2]
            });
            var result = scaler.getMetadatas();
            var firstResult = result[0];
            var secondResult = result[1];
            
            it("should have the first metadata with a start of 0 and an end of 0.5", () => {
                expect(firstResult.start).toEqual(0);
                expect(firstResult.end).toEqual(0.5);
                expect(firstResult.id).toEqual(metadata1.id);
            });
            
            it("should have the second metadata with a start of 0.5 and an end of 1", () => {
                expect(secondResult.start).toEqual(0.5);
                expect(secondResult.end).toEqual(1);
                expect(secondResult.id).toEqual(metadata2.id);
            });
        });
        
        describe("with 4 metadatas", () => {
            var scaler = new App.LengthScaler({
                skills: [], settings: [], skillUsages: [],
                metadatas: [metadata1, metadata2, metadata3, metadata4]
            });
            var result = scaler.getMetadatas();
            var firstResult = result[0];
            var secondResult = result[1];
            var thirdResult = result[2];
            var fourthResult = result[3];
            
            it("should have the first metadata with a start of 0 and an end of 0.25", () => {
                expect(firstResult.start).toEqual(0);
                expect(firstResult.end).toEqual(0.25);
                expect(firstResult.id).toEqual(metadata1.id);
            });
            
            it("should have the second metadata with a start of 0.25 and an end of 0.5", () => {
                expect(secondResult.start).toEqual(0.25);
                expect(secondResult.end).toEqual(0.5);
                expect(secondResult.id).toEqual(metadata2.id);
            });
            
            it("should have the third metadata with a start of 0.5 and an end of 0.75", () => {
                expect(thirdResult.start).toEqual(0.5);
                expect(thirdResult.end).toEqual(0.75);
                expect(thirdResult.id).toEqual(metadata3.id);
            });
            
            it("should have the fourth metadata with a start of 0.75 and an end of 1", () => {
                expect(fourthResult.start).toEqual(0.75);
                expect(fourthResult.end).toEqual(1);
                expect(fourthResult.id).toEqual(metadata4.id);
            });
            
        });
         
    });
});