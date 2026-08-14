import{readFileSync}from'node:fs';import vm from'node:vm';
const context={document:{addEventListener(){},querySelector(){return null}},Intl};vm.createContext(context);vm.runInContext(`${readFileSync('assets/js/dfm-calculators.js','utf8')}\nglobalThis.tools=dfmTools;globalThis.math=dfmMath`,context);
const{tools,math}=context,near=(actual,expected,name,tolerance=1e-9)=>{if(Math.abs(actual-expected)>tolerance)throw Error(`${name}: ${actual} !== ${expected}`)};
const wallCases=[{nominal:2.5,minimum:2.25,maximum:2.75,allowed:10},{nominal:1,minimum:.8,maximum:1.05,allowed:15},{nominal:8,minimum:7.6,maximum:9.2,allowed:20}];
for(const[index,v]of wallCases.entries()){const r=math.wall(v),low=(v.nominal-v.minimum)/v.nominal*100,high=(v.maximum-v.nominal)/v.nominal*100;near(r.lowDeviation,low,`wall low ${index}`);near(r.highDeviation,high,`wall high ${index}`);near(r.maximumDeviation,Math.max(low,high),`wall maximum ${index}`);near(r.range,v.maximum-v.minimum,`wall range ${index}`)}
if(math.wall(wallCases[0]).within!==true||math.wall(wallCases[1]).within!==false)throw Error('wall boundary classification');
near(tools['wall-thickness-uniformity'].c(wallCases[0]).v,10,'wall default');
const ribCases=[{wallThickness:3,ribThickness:1.5,ribHeight:9,ribSpacing:7.5,baseRadius:.9},{wallThickness:2,ribThickness:.8,ribHeight:4,ribSpacing:8,baseRadius:.5},{wallThickness:5,ribThickness:3.5,ribHeight:20,ribSpacing:10,baseRadius:2.5}];
for(const[index,v]of ribCases.entries()){const r=math.rib(v);near(r.thicknessRatio,v.ribThickness/v.wallThickness*100,`rib thickness ${index}`);near(r.heightRatio,v.ribHeight/v.wallThickness,`rib height ${index}`);near(r.spacingRatio,v.ribSpacing/v.wallThickness,`rib spacing ${index}`);near(r.radiusRatio,v.baseRadius/v.wallThickness*100,`rib radius ${index}`)}
if(math.rib(ribCases[0]).passed!==4||math.rib(ribCases[2]).passed!==0)throw Error('rib decision-matrix boundary classification');
near(tools['rib-design-checker'].c(ribCases[0]).v,50,'rib default');
const bossCases=[{nominalWall:3,bossWall:1.5,fastenerDiameter:4,outerDiameter:8,baseRadius:.75},{nominalWall:2,bossWall:.8,fastenerDiameter:3,outerDiameter:7,baseRadius:.4},{nominalWall:6,bossWall:4,fastenerDiameter:8,outerDiameter:12,baseRadius:.1}];
for(const[index,v]of bossCases.entries()){const r=math.boss(v);near(r.wallRatio,v.bossWall/v.nominalWall*100,`boss wall ${index}`);near(r.diameterRatio,v.outerDiameter/v.fastenerDiameter,`boss diameter ${index}`);near(r.radiusRatio,v.baseRadius/v.nominalWall*100,`boss radius ${index}`)}
if(math.boss(bossCases[0]).passed!==3||math.boss(bossCases[2]).passed!==0)throw Error('boss decision-matrix boundary classification');
near(tools['boss-design-checker'].c(bossCases[0]).v,50,'boss default');
const draftCases=[{actualDraft:2,depth:30,textureMinimum:1,required:1,margin:1},{actualDraft:4,depth:75,textureMinimum:2,required:3,margin:1},{actualDraft:3,depth:101,textureMinimum:5,required:5,margin:-2}];
for(const[index,v]of draftCases.entries()){const r=math.draft(v);near(r.required,v.required,`draft required ${index}`);near(r.margin,v.margin,`draft margin ${index}`)}
if(math.draft(draftCases[0]).meets!==true||math.draft(draftCases[2]).meets!==false)throw Error('draft boundary classification');
near(tools['draft-texture-checker'].c(draftCases[0]).v,1,'draft default');
console.log(JSON.stringify({tools:Object.keys(tools).length,independentCases:12,status:'passed'}));
