'use strict';

// FLAMEWISE: client-side research workspace. No scientific values are fabricated.
const PSI = 'https://psi.nasa.gov/physci/repo/search?data_source=psi&data_type=investigation';
const EXPERIMENTS = [
 {name:'Burning Rate Emulator',acronym:'BRE',family:'ACME',kind:'Facility investigation',status:'official',gravity:'Microgravity',theme:'Flammability / burning rate',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/acme/burning-rate-emulator-bre-operations/'},
 {name:'Coflow Laminar Diffusion Flame',acronym:'CLD Flame',family:'ACME',kind:'ACME investigation',status:'official',gravity:'Microgravity',theme:'Laminar diffusion flames',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/acme/coflow-laminar-diffusion-flame-cld-flame/'},
 {name:'Electric-Field Effects on Laminar Diffusion Flames',acronym:'E-FIELD Flames',family:'ACME',kind:'ACME investigation',status:'official',gravity:'Microgravity / electric-field study',theme:'Flame structure / electric fields',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/acme/electric-field-effects-laminar-diffusion-flames-e-field-flames/'},
 {name:'Flame Design',acronym:'Flame Design',family:'ACME',kind:'ACME investigation',status:'official',gravity:'Microgravity',theme:'Flame structure / design',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/acme/flame-design/'},
 {name:'Structure and Response of Spherical Diffusion Flames',acronym:'s-Flame',family:'ACME',kind:'ACME investigation',status:'official',gravity:'Microgravity',theme:'Spherical diffusion flames',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/acme/structure-response-spherical-diffusion-flames-s-flame/'},
 {name:'Combustion of Flammable Materials',acronym:'CFI',family:'MDCA',kind:'Investigation / classification varies by NASA portal',status:'official',gravity:'Microgravity',theme:'Material combustion',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/mdca/cfi/'},
 {name:'Flame Extinguishment Experiment',acronym:'FLEX',family:'MDCA',kind:'Investigation',status:'official',gravity:'Microgravity',theme:'Flame extinction / suppression',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/flex/'},
 {name:'Flame Extinguishment Experiment 2',acronym:'FLEX-2',family:'MDCA',kind:'Follow-on investigation',status:'official',gravity:'Microgravity',theme:'Droplet combustion / extinction',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/flex-2/'},
 {name:'FLEX-2J',acronym:'FLEX-2J',family:'MDCA',kind:'Related investigation',status:'official',gravity:'Microgravity',theme:'Droplet combustion',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/flex-2J/'},
 {name:'FLEX-ICE-GA',acronym:'FLEX-ICE-GA',family:'MDCA',kind:'Related investigation',status:'official',gravity:'Ground / supporting study',theme:'Combustion / extinction',url:'https://gipoc.grc.nasa.gov/wp/fcf-cir/flex-ice-ga/'},
 {name:'Solid Fuel Ignition and Extinction',acronym:'SoFIE',family:'SoFIE',kind:'Investigation programme',status:'official',gravity:'Microgravity',theme:'Solid-fuel ignition / extinction',url:'https://science.nasa.gov/biological-physical/investigations/sofie/'},
 {name:'SoFIE-GEL',acronym:'SoFIE-GEL',family:'SoFIE',kind:'SoFIE sub-investigation',status:'official',gravity:'Microgravity',theme:'Solid-fuel ignition',url:'https://science.nasa.gov/biological-physical/investigations/sofie-gel/'},
 {name:'SoFIE-MIST',acronym:'SoFIE-MIST',family:'SoFIE',kind:'SoFIE sub-investigation',status:'official',gravity:'Microgravity',theme:'Solid-fuel ignition / extinction',url:'https://science.nasa.gov/biological-physical/investigations/sofie-mist/'},
 {name:'SoFIE-RTDFS',acronym:'SoFIE-RTDFS',family:'SoFIE',kind:'SoFIE component — verify exact record title',status:'catalogue',gravity:'Microgravity',theme:'Solid-fuel research',url:PSI},
 {name:'Burning and Suppression of Solids',acronym:'BASS',family:'Other',kind:'Investigation',status:'catalogue',gravity:'Microgravity',theme:'Solid-material flammability / suppression',url:PSI},
 {name:'Burning and Suppression of Solids II',acronym:'BASS-II',family:'Other',kind:'Follow-on investigation',status:'catalogue',gravity:'Microgravity',theme:'Solid-material flammability / suppression',url:PSI},
 {name:'Burning and Suppression of Solids — Materials Science',acronym:'BASS-M',family:'Other',kind:'Payload portal entry — verify relationship to BASS series',status:'catalogue',gravity:'Microgravity',theme:'Solid-material combustion',url:'https://gipoc.grc.nasa.gov/wp/payload-portals/'},
 {name:'Design of Flame Experiments',acronym:'DAFT',family:'Other',kind:'Research investigation — verify exact official title',status:'catalogue',gravity:'Microgravity / ground support',theme:'Flame design',url:PSI},
 {name:'Design of Flame Experiments 2',acronym:'DAFT-2',family:'Other',kind:'Related investigation — verify exact official title',status:'catalogue',gravity:'Microgravity / ground support',theme:'Flame design',url:PSI},
 {name:'Smoke Aerosol Measurement Experiment',acronym:'SAME',family:'Other',kind:'Investigation',status:'official',gravity:'Microgravity',theme:'Smoke / aerosol detection',url:'https://psi.nasa.gov/physci/repo/data/investigations/PSI-102'},
 {name:'Smoke Aerosol Measurement Experiment — Reduced Gravity',acronym:'SAME-R',family:'Other',kind:'Related investigation',status:'official',gravity:'Microgravity',theme:'Smoke / aerosol detection',url:'https://psi.nasa.gov/physci/repo/data/investigations/PSI-101'},
 {name:'SLICE',acronym:'SLICE',family:'Other',kind:'Research investigation — verify full title',status:'catalogue',gravity:'Microgravity / ground support',theme:'Combustion science',url:PSI},
 {name:'Spacecraft Fire Experiment I',acronym:'SAFFIRE-I',family:'Other',kind:'Orbital spacecraft-fire investigation',status:'official',gravity:'Microgravity',theme:'Large-scale fire growth / flammability',url:'https://psi.nasa.gov/physci/repo/data/investigations/PSI-98'},
 {name:'Spacecraft Fire Experiment II',acronym:'SAFFIRE-II',family:'Other',kind:'Orbital spacecraft-fire investigation',status:'catalogue',gravity:'Microgravity',theme:'Fire growth / smoke',url:PSI},
 {name:'Spacecraft Fire Experiment III',acronym:'SAFFIRE-III',family:'Other',kind:'Orbital spacecraft-fire investigation',status:'catalogue',gravity:'Microgravity',theme:'Fire growth / smoke',url:PSI},
 {name:'Spacecraft Fire Experiment IV',acronym:'SAFFIRE-IV',family:'Other',kind:'Entry included for verification; confirm official record',status:'verify',gravity:'Unconfirmed',theme:'Spacecraft fire safety',url:PSI},
 {name:'Spacecraft Fire Experiment V',acronym:'SAFFIRE-V',family:'Other',kind:'Entry included for verification; confirm official record',status:'verify',gravity:'Unconfirmed',theme:'Spacecraft fire safety',url:PSI},
 {name:'Spacecraft Fire Experiment VI',acronym:'SAFFIRE-VI',family:'Other',kind:'Entry included for verification; confirm official record',status:'verify',gravity:'Unconfirmed',theme:'Spacecraft fire safety',url:PSI},
 {name:'Structure and Combustion of Laminar Diffusion Flames',acronym:'SPICE',family:'Other',kind:'PSI investigation',status:'official',gravity:'Microgravity',theme:'Laminar diffusion flames / smoke point',url:'https://psi.nasa.gov/physci/repo/data/investigations/PSI-107'},
 {name:'Cool Flame Investigation — Ground',acronym:'CFI-G',family:'Related research',kind:'Ground-based / related research; classification differs by NASA listing',status:'catalogue',gravity:'Ground',theme:'Cool-flame transitions',url:PSI},
 {name:'Quantitative Studies of Cool Flame Transitions',acronym:'Cool Flame Transitions',family:'Related research',kind:'Ground-based supporting research',status:'catalogue',gravity:'Ground',theme:'Cool-flame transitions',url:PSI}
];

let importedRecords = [];
let importedHeaders = [];
let filteredRecords = [];
const $ = id => document.getElementById(id);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = value => String(value ?? '').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');

// Starfield retained from the original FLAME / LAB design.
(function initStars(){
 const canvas=$('stars'); if(!canvas) return; const ctx=canvas.getContext('2d'); let stars=[];
 function resize(){const dpr=Math.min(devicePixelRatio||1,2);canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:Math.min(180,Math.floor(innerWidth/6))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.3+.2,a:Math.random()*.65+.15,s:Math.random()*.18+.03}));}
 function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of stars){p.a+=Math.sin(Date.now()*.0005+p.x)*.001;ctx.globalAlpha=Math.max(.1,Math.min(.8,p.a));ctx.fillStyle='#dce4ff';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();p.y-=p.s;if(p.y<0){p.y=innerHeight;p.x=Math.random()*innerWidth;}}ctx.globalAlpha=1;requestAnimationFrame(draw)}
 addEventListener('resize',resize);resize();draw();
})();
$('menuBtn').addEventListener('click',()=>$('navlinks').classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>$('navlinks').classList.remove('open')));

function renderLibrary(){
 const q=$('librarySearch').value.trim().toLowerCase(),family=$('familyFilter').value,status=$('statusFilter').value;
 const rows=EXPERIMENTS.filter(x=>(family==='all'||x.family===family)&&(status==='all'||x.status===status)&&[x.name,x.acronym,x.family,x.kind,x.theme,x.gravity].join(' ').toLowerCase().includes(q));
 $('libraryGrid').innerHTML=rows.length?rows.map(x=>`<article class="experiment-card"><div class="card-meta"><span class="mini-tag">${esc(x.family)}</span><span class="mini-tag ${x.status==='verify'?'warn':''}">${x.status==='official'?'Official page / record':x.status==='catalogue'?'NASA catalogue lookup':'Needs verification'}</span></div><h3>${esc(x.acronym)}</h3><p>${esc(x.name)}</p><p>${esc(x.kind)}</p><div class="card-meta"><span class="mini-tag">${esc(x.gravity)}</span><span class="mini-tag">${esc(x.theme)}</span></div><div class="card-actions"><a href="${esc(x.url)}" target="_blank" rel="noopener">Open source ↗</a><button class="text-button" data-compare="${esc(x.acronym)}">Use in comparison +</button></div></article>`).join(''):'<div class="empty-state">No catalogue entries match these filters.</div>';
 $('metricExperiments').textContent=EXPERIMENTS.length;
 $('libraryGrid').querySelectorAll('[data-compare]').forEach(btn=>btn.addEventListener('click',()=>{const item=EXPERIMENTS.find(x=>x.acronym===btn.dataset.compare);if(item){$('compareA').value=item.acronym;document.querySelector('#compare').scrollIntoView({behavior:'smooth'});}}));
}
['librarySearch','familyFilter','statusFilter'].forEach(id=>$(id).addEventListener(id==='librarySearch'?'input':'change',renderLibrary));

function parseCSV(text){
 const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<text.length;i++){const c=text[i],n=text[i+1];if(c==='"'&&quoted&&n==='"'){cell+='"';i++;}else if(c==='"'){quoted=!quoted;}else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&n==='\n')i++;row.push(cell);if(row.some(v=>v.trim()!==''))rows.push(row);row=[];cell='';}else cell+=c;}
 row.push(cell);if(row.some(v=>v.trim()!==''))rows.push(row);return rows;
}
function normalizeRecord(obj,index){
 const r={...obj};
 const aliases={experiment:['experiment','experiment_name','investigation','investigation_name','title','name'],material:['material','fuel','material_name'],gravity:['gravity','gravity_condition','gravity_level','environment'],theme:['theme','research_area','topic'],variable:['variable','parameter','measurement','measured_variable'],value:['value','measurement_value','result_value'],unit:['unit','units'],source_url:['source_url','url','doi_url','publication_url','dataset_url'],source_title:['source_title','publication','reference','citation'],record_type:['record_type','data_type','evidence_type']};
 for(const [target,keys] of Object.entries(aliases)){if(r[target]===undefined||r[target]===''){const key=keys.find(k=>r[k]!==undefined&&r[k]!=='');if(key)r[target]=r[key];}}
 r._id=r._id||`record-${index+1}`;r.experiment=r.experiment||'Unspecified experiment';r._raw=obj;return r;
}
function loadObjects(objects,sourceName){
 if(!Array.isArray(objects))throw new Error('JSON must contain an array of records, or an object with a records array.');
 if(!objects.length)throw new Error('The selected file contains no records.');
 importedRecords=objects.map(normalizeRecord);importedHeaders=[...new Set(objects.flatMap(o=>Object.keys(o)))];
 refreshAll();$('dataStatus').textContent=`● ${importedRecords.length} RECORDS LOADED · ${sourceName}`;$('dataStatus').style.color='var(--green)';
}
$('csvFile').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{const rows=parseCSV(await f.text());if(rows.length<2)throw new Error('CSV needs a header row and at least one data row.');const headers=rows[0].map((h,i)=>h.trim()||`column_${i+1}`);loadObjects(rows.slice(1).map(row=>Object.fromEntries(headers.map((h,i)=>[h,(row[i]??'').trim()]))),f.name);}catch(err){alert(`Could not import CSV: ${err.message}`);}e.target.value='';});
$('jsonFile').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{const parsed=JSON.parse(await f.text());loadObjects(Array.isArray(parsed)?parsed:parsed.records,f.name);}catch(err){alert(`Could not import JSON: ${err.message}`);}e.target.value='';});
function distinctValues(field){return [...new Set(importedRecords.map(r=>String(r[field]??'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));}
function refillSelect(id,values,label){const el=$(id),old=el.value;el.innerHTML=`<option value="all">${label}</option>`+values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('');if(values.includes(old))el.value=old;}
function getFiltered(){const q=$('recordSearch').value.trim().toLowerCase(),g=$('gravityFilter').value,m=$('materialFilter').value;return importedRecords.filter(r=>{const text=Object.values(r).filter(v=>typeof v!=='object').join(' ').toLowerCase();return (!q||text.includes(q))&&(g==='all'||String(r.gravity??'')===g)&&(m==='all'||String(r.material??'')===m);});}
function renderRecords(){
 filteredRecords=getFiltered();const keys=importedHeaders.length?importedHeaders:[...new Set(filteredRecords.flatMap(r=>Object.keys(r).filter(k=>!k.startsWith('_'))))];
 $('tableHead').innerHTML=keys.length?`<tr>${keys.map(k=>`<th>${esc(k.replaceAll('_',' '))}</th>`).join('')}</tr>`:'';
 $('tableBody').innerHTML=filteredRecords.length?filteredRecords.slice(0,150).map(r=>`<tr>${keys.map(k=>`<td>${k==='source_url'&&r[k]?`<a href="${esc(r[k])}" target="_blank" rel="noopener">Open source ↗</a>`:esc(r[k]??'—')}</td>`).join('')}</tr>`).join(''):`<tr><td class="empty" colspan="${Math.max(keys.length,1)}">${importedRecords.length?'No records match the current search and filters.':'No research dataset imported yet.'}</td></tr>`;
 $('recordCount').textContent=`${filteredRecords.length} shown / ${importedRecords.length} total records`;
 $('metricRecords').textContent=importedRecords.length;$('metricSources').textContent=importedRecords.filter(r=>r.source_url).length;
}
['recordSearch','gravityFilter','materialFilter'].forEach(id=>$(id).addEventListener(id==='recordSearch'?'input':'change',()=>{renderRecords();renderInsights();renderChart();renderGraph();renderRanking();}));
$('clearDataBtn').addEventListener('click',()=>{importedRecords=[];importedHeaders=[];$('recordSearch').value='';refillSelect('gravityFilter',[],'All gravity conditions');refillSelect('materialFilter',[],'All materials');$('dataStatus').textContent='● CATALOGUE ONLY · NO DATA IMPORTED';$('dataStatus').style.color='var(--gold)';refreshAll();});
$('exportBtn').addEventListener('click',()=>{if(!filteredRecords.length){alert('There are no filtered records to export.');return;}const headers=[...new Set(filteredRecords.flatMap(r=>Object.keys(r).filter(k=>!k.startsWith('_'))))];const csv=[headers,...filteredRecords.map(r=>headers.map(h=>r[h]??''))].map(row=>row.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\r\n');download('flamewise-filtered-records.csv',csv,'text/csv');});
function download(name,content,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();URL.revokeObjectURL(url);}

function populateCompare(){const opts=EXPERIMENTS.map(x=>`<option value="${esc(x.acronym)}">${esc(x.acronym)} — ${esc(x.name)}</option>`).join('');$('compareA').innerHTML=opts;$('compareB').innerHTML=opts;$('compareB').selectedIndex=Math.min(1,EXPERIMENTS.length-1);}
function compareRecords(){
 const a=EXPERIMENTS.find(x=>x.acronym===$('compareA').value),b=EXPERIMENTS.find(x=>x.acronym===$('compareB').value);if(!a||!b)return;
 const fields=[['Full name','name'],['Acronym','acronym'],['Programme','family'],['Classification','kind'],['Gravity / environment','gravity'],['Research theme','theme'],['Source status','status'],['Official / catalogue source','url']];
 $('compareResult').innerHTML=`<table class="compare-table"><thead><tr><th>Field</th><th>${esc(a.acronym)}</th><th>${esc(b.acronym)}</th></tr></thead><tbody>${fields.map(([label,key])=>`<tr><td>${esc(label)}</td><td>${key==='url'?`<a href="${esc(a[key])}" target="_blank" rel="noopener">Open source ↗</a>`:esc(a[key]||'Not reported')}</td><td>${key==='url'?`<a href="${esc(b[key])}" target="_blank" rel="noopener">Open source ↗</a>`:esc(b[key]||'Not reported')}</td></tr>`).join('')}</tbody></table><p class="chart-caption">Catalogue metadata comparison only. This does not establish equivalent experimental conditions or comparable scientific outcomes.</p>`;
}
$('compareBtn').addEventListener('click',compareRecords);

function completeness(r){const fields=['experiment','material','gravity','variable','value','unit','source_url','source_title'];return Math.round(fields.filter(k=>r[k]!==undefined&&String(r[k]).trim()!=='').length/fields.length*100);}
function renderRanking(){
 const mode=$('rankScope').value;
 if(mode==='catalogue'){const groups=['official','catalogue','verify'];$('rankingList').innerHTML=groups.map(g=>{const rows=EXPERIMENTS.filter(x=>x.status===g);return `<div class="rank-row"><span class="rank-num">${rows.length}</span><span class="rank-name">${g==='official'?'Direct official page / record':g==='catalogue'?'NASA catalogue lookup':'Needs verification'}</span><span class="rank-bar"><span style="width:${rows.length/EXPERIMENTS.length*100}%"></span></span><span class="rank-score">${rows.length}</span></div>`}).join('')+'<p class="chart-caption">Catalogue grouping by source status only. No scientific score or experiment-quality ranking is calculated.</p>';return;}
 let rows=importedRecords.map(r=>({name:r.experiment,score:completeness(r),source:r.source_url||''}));
 rows.sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
 $('rankingList').innerHTML=rows.length?rows.slice(0,40).map((r,i)=>`<div class="rank-row"><span class="rank-num">${String(i+1).padStart(2,'0')}</span><span class="rank-name">${esc(r.name)}</span><span class="rank-bar"><span style="width:${r.score}%"></span></span><span class="rank-score">${r.score}%</span></div>`).join(''):'<div class="empty">Import research records to calculate evidence completeness.</div>';
}
$('rankScope').addEventListener('change',renderRanking);

function renderInsights(){
 if(!filteredRecords.length){$('datasetInsights').textContent='No imported records are currently available. Import verified research data to generate summaries.';$('gapInsights').textContent='No dataset is loaded, so no evidence-gap assessment can be made.';return;}
 const experiments=distinctFrom(filteredRecords,'experiment'),materials=distinctFrom(filteredRecords,'material'),gravities=distinctFrom(filteredRecords,'gravity'),sources=filteredRecords.filter(r=>r.source_url).length;
 $('datasetInsights').innerHTML=`<ul><li><b>${filteredRecords.length}</b> records currently match your filters.</li><li><b>${experiments.length}</b> experiment labels, <b>${materials.length}</b> material labels, and <b>${gravities.length}</b> gravity labels appear in these records.</li><li><b>${sources}</b> of ${filteredRecords.length} matching records include a source URL.</li></ul><p>Experiment labels: ${experiments.slice(0,12).map(esc).join(', ')||'Not reported'}.</p>`;
 const missing=['material','gravity','variable','value','unit','source_url'].map(k=>({k,n:filteredRecords.filter(r=>r[k]===undefined||String(r[k]).trim()==='').length})).filter(x=>x.n);
 $('gapInsights').innerHTML=missing.length?`<p>Fields with missing values in the current filtered records:</p><ul>${missing.map(x=>`<li><b>${esc(x.k.replaceAll('_',' '))}</b>: ${x.n} of ${filteredRecords.length} records missing.</li>`).join('')}</ul><p>Missing information is not inferred or filled automatically.</p>`:'All checked core fields are populated in the current filtered records. Verify each value against its original source.';
}
function distinctFrom(rows,key){return [...new Set(rows.map(r=>String(r[key]??'').trim()).filter(Boolean))].sort();}

function numericFields(){const keys=[...new Set(filteredRecords.flatMap(r=>Object.keys(r)))].filter(k=>filteredRecords.some(r=>r[k]!==''&&r[k]!==null&&r[k]!==undefined&&Number.isFinite(Number(r[k]))));return keys;}
function renderChart(){
 const canvas=$('dataChart'),ctx=canvas.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2),w=canvas.clientWidth||700,h=260;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
 const fields=numericFields(),select=$('chartField'),old=select.value;select.innerHTML='<option value="auto">Choose numeric field automatically</option>'+fields.map(k=>`<option value="${esc(k)}">${esc(k.replaceAll('_',' '))}</option>`).join('');if(fields.includes(old))select.value=old;
 const field=select.value==='auto'?fields.find(k=>!['id','year','sample','index'].includes(k.toLowerCase())):select.value;
 if(!field||!filteredRecords.length){$('chartCaption').textContent='No numeric measurement data available yet. No placeholder values are plotted.';ctx.fillStyle='#8392a9';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.fillText('Awaiting source-backed numeric data',w/2,h/2);return;}
 const points=filteredRecords.map((r,i)=>({label:String(r.experiment||r.material||r.id||`Record ${i+1}`).slice(0,18),value:Number(r[field])})).filter(p=>Number.isFinite(p.value)).slice(0,24);
 if(!points.length){$('chartCaption').textContent='The selected field has no numeric values.';return;}
 const max=Math.max(...points.map(p=>p.value)),min=Math.min(0,...points.map(p=>p.value)),range=max-min||1,left=42,right=12,top=18,bottom=58,plotW=w-left-right,plotH=h-top-bottom;
 ctx.strokeStyle='#aab6ff33';ctx.lineWidth=1;for(let i=0;i<5;i++){const y=top+plotH*i/4;ctx.beginPath();ctx.moveTo(left,y);ctx.lineTo(w-right,y);ctx.stroke();}
 const slot=plotW/points.length,bw=Math.max(5,slot*.58);points.forEach((p,i)=>{const bh=(p.value-min)/range*plotH,x=left+i*slot+(slot-bw)/2,y=top+plotH-bh;const grad=ctx.createLinearGradient(0,y,0,top+plotH);grad.addColorStop(0,'#74e2ee');grad.addColorStop(1,'#6f69d9');ctx.fillStyle=grad;ctx.fillRect(x,y,bw,bh);ctx.save();ctx.translate(x+bw/2,top+plotH+9);ctx.rotate(-.45);ctx.fillStyle='#a4accb';ctx.font='9px monospace';ctx.textAlign='left';ctx.fillText(p.label,0,0);ctx.restore();});
 ctx.fillStyle='#a4accb';ctx.font='10px monospace';ctx.textAlign='left';ctx.fillText(field.replaceAll('_',' '),8,12);$('chartCaption').textContent=`Field: ${field}. ${points.length} numeric records plotted. Units: ${distinctFrom(filteredRecords,'unit').join(', ')||'not specified in imported records'}. Values are displayed as provided; verify units and comparability before interpreting.`;
}
$('chartField').addEventListener('change',renderChart);addEventListener('resize',()=>{if(importedRecords.length)renderChart();});

function renderGraph(){
 const mode=$('graphMode').value;const field=mode==='materials'?'material':mode==='gravity'?'gravity':'theme';if(!filteredRecords.length){$('knowledgeGraph').innerHTML='<div class="empty-state">Import records with material, gravity, or research-theme fields to build the connection view.</div>';return;}
 const groups=new Map();filteredRecords.forEach(r=>{const key=String(r[field]??'Not reported').trim()||'Not reported';if(!groups.has(key))groups.set(key,[]);groups.get(key).push(r);});
 $('knowledgeGraph').innerHTML=[...groups.entries()].sort((a,b)=>b[1].length-a[1].length).map(([name,rows])=>`<div class="graph-group"><h4>${esc(name)} · ${rows.length}</h4>${rows.slice(0,10).map(r=>`<span class="graph-node">${esc(r.experiment||'Unspecified experiment')}<small>${esc(r.variable||r.record_type||'No variable specified')}</small></span>`).join('')}</div>`).join('');
}
$('graphMode').addEventListener('change',renderGraph);

function runAssistant(){
 const q=$('assistantQuestion').value.trim().toLowerCase();if(!q){$('assistantAnswer').textContent='Enter a topic, experiment, material, gravity condition, or measurement to search.';return;}
 const terms=q.split(/\s+/).filter(t=>t.length>2);const imported=importedRecords.map(r=>({kind:'Imported record',title:r.experiment||'Unspecified experiment',text:Object.values(r).filter(v=>typeof v!=='object').join(' '),url:r.source_url||'',detail:r}));const catalog=EXPERIMENTS.map(x=>({kind:'Catalogue entry',title:x.acronym+' — '+x.name,text:[x.name,x.acronym,x.family,x.kind,x.gravity,x.theme].join(' '),url:x.url,detail:x}));
 const matches=[...imported,...catalog].map(item=>({...item,score:terms.reduce((s,t)=>s+(item.text.toLowerCase().includes(t)?1:0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,12);
 if(!matches.length){$('assistantAnswer').textContent='No matching record was found in the current catalogue or imported dataset. Try a broader term. This assistant does not generate unsupported scientific answers.';return;}
 $('assistantAnswer').innerHTML=`<p>Found <b>${matches.length}</b> matching records. These are retrieval results, not an AI-generated scientific conclusion.</p>${matches.map(m=>`<div class="answer-item"><strong>${esc(m.title)}</strong> <span class="mini-tag">${esc(m.kind)}</span><p>${esc(m.detail.theme||m.detail.variable||m.detail.gravity||m.detail.material||m.detail.kind||'Matching catalogue metadata')}</p>${m.url?`<a href="${esc(m.url)}" target="_blank" rel="noopener">Open source / record ↗</a>`:'<span class="source-status">No source URL attached</span>'}</div>`).join('')}`;
}
$('askBtn').addEventListener('click',runAssistant);$('assistantQuestion').addEventListener('keydown',e=>{if(e.key==='Enter')runAssistant();});

function refreshAll(){
 refillSelect('gravityFilter',distinctValues('gravity'),'All gravity conditions');refillSelect('materialFilter',distinctValues('material'),'All materials');
 renderRecords();renderInsights();renderChart();renderGraph();renderRanking();
}
renderLibrary();populateCompare();compareRecords();refreshAll();
