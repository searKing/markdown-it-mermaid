import index = require('../src/index');

import * as path from 'path';

test('Should have mermaid2html available', () => {
  expect(index.mermaid2html).toBeTruthy();
});
const taskList: string = `
\`\`\`sequence
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
`;
const expectTaskList: string = `<svg id="mermaidChart0" width="228.3515625" xmlns="http://www.w3.org/2000/svg" height="394.8324410565503" viewBox="0 0 172.234375 274" style="width: 220.3515625; height: 394.8324410565503;"><style>
/* Flowchart variables */
/* Sequence Diagram variables */
/* Gantt chart variables */
.mermaid .label {
color: #333;
}
.node rect,
.node circle,
.node ellipse,
.node polygon {
fill: #ECECFF;
stroke: #CCCCFF;
stroke-width: 1px;
}
.arrowheadPath {
fill: #333333;
}
.edgePath .path {
stroke: #333333;
}
.edgeLabel {
background-color: #e8e8e8;
}
.cluster rect {
fill: #ffffde !important;
rx: 4 !important;
stroke: #aaaa33 !important;
stroke-width: 1px !important;
}
.cluster text {
fill: #333;
}
.actor {
stroke: #CCCCFF;
fill: #ECECFF;
}
text.actor {
fill: black;
stroke: none;
}
.actor-line {
stroke: grey;
}
.messageLine0 {
stroke-width: 1.5;
stroke-dasharray: "2 2";
marker-end: "url(#arrowhead)";
stroke: #333;
}
.messageLine1 {
stroke-width: 1.5;
stroke-dasharray: "2 2";
stroke: #333;
}
#arrowhead {
fill: #333;
}
#crosshead path {
fill: #333 !important;
stroke: #333 !important;
}
.messageText {
fill: #333;
stroke: none;
}
.labelBox {
stroke: #CCCCFF;
fill: #ECECFF;
}
.labelText {
fill: black;
stroke: none;
}
.loopText {
fill: black;
stroke: none;
}
.loopLine {
stroke-width: 2;
stroke-dasharray: "2 2";
marker-end: "url(#arrowhead)";
stroke: #CCCCFF;
}
.note {
stroke: #aaaa33;
fill: #fff5ad;
}
.noteText {
fill: black;
stroke: none;
font-family: 'trebuchet ms', verdana, arial;
font-size: 14px;
}
/** Section styling */
.section {
stroke: none;
opacity: 0.2;
}
.section0 {
fill: rgba(102, 102, 255, 0.49);
}
.section2 {
fill: #fff400;
}
.section1,
.section3 {
fill: white;
opacity: 0.2;
}
.sectionTitle0 {
fill: #333;
}
.sectionTitle1 {
fill: #333;
}
.sectionTitle2 {
fill: #333;
}
.sectionTitle3 {
fill: #333;
}
.sectionTitle {
text-anchor: start;
font-size: 11px;
text-height: 14px;
}
/* Grid and axis */
.grid .tick {
stroke: lightgrey;
opacity: 0.3;
shape-rendering: crispEdges;
}
.grid path {
stroke-width: 0;
}
/* Today line */
.today {
fill: none;
stroke: red;
stroke-width: 2px;
}
/* Task styling */
/* Default task */
.task {
stroke-width: 2;
}
.taskText {
text-anchor: middle;
font-size: 11px;
}
.taskTextOutsideRight {
fill: black;
text-anchor: start;
font-size: 11px;
}
.taskTextOutsideLeft {
fill: black;
text-anchor: end;
font-size: 11px;
}
/* Specific task settings for the sections*/
.taskText0,
.taskText1,
.taskText2,
.taskText3 {
fill: white;
}
.task0,
.task1,
.task2,
.task3 {
fill: #8a90dd;
stroke: #534fbc;
}
.taskTextOutside0,
.taskTextOutside2 {
fill: black;
}
.taskTextOutside1,
.taskTextOutside3 {
fill: black;
}
/* Active task */
.active0,
.active1,
.active2,
.active3 {
fill: #bfc7ff;
stroke: #534fbc;
}
.activeText0,
.activeText1,
.activeText2,
.activeText3 {
fill: black !important;
}
/* Completed task */
.done0,
.done1,
.done2,
.done3 {
stroke: grey;
fill: lightgrey;
stroke-width: 2;
}
.doneText0,
.doneText1,
.doneText2,
.doneText3 {
fill: black !important;
}
/* Tasks on the critical line */
.crit0,
.crit1,
.crit2,
.crit3 {
stroke: #ff8888;
fill: red;
stroke-width: 2;
}
.activeCrit0,
.activeCrit1,
.activeCrit2,
.activeCrit3 {
stroke: #ff8888;
fill: #bfc7ff;
stroke-width: 2;
}
.doneCrit0,
.doneCrit1,
.doneCrit2,
.doneCrit3 {
stroke: #ff8888;
fill: lightgrey;
stroke-width: 2;
cursor: pointer;
shape-rendering: crispEdges;
}
.doneCritText0,
.doneCritText1,
.doneCritText2,
.doneCritText3 {
fill: black !important;
}
.activeCritText0,
.activeCritText1,
.activeCritText2,
.activeCritText3 {
fill: black !important;
}
.titleText {
text-anchor: middle;
font-size: 18px;
fill: black;
}
g.classGroup text {
fill: #9370DB;
stroke: none;
font-family: 'trebuchet ms', verdana, arial;
font-size: 10px;
}
g.classGroup rect {
fill: #ECECFF;
stroke: #9370DB;
}
g.classGroup line {
stroke: #9370DB;
stroke-width: 1;
}
svg .classLabel .box {
stroke: none;
stroke-width: 0;
fill: #ECECFF;
opacity: 0.5;
}
svg .classLabel .label {
fill: #9370DB;
font-size: 10px;
}
.relation {
stroke: #9370DB;
stroke-width: 1;
fill: none;
}
.composition {
fill: #9370DB;
stroke: #9370DB;
stroke-width: 1;
}
#compositionStart {
fill: #9370DB;
stroke: #9370DB;
stroke-width: 1;
}
#compositionEnd {
fill: #9370DB;
stroke: #9370DB;
stroke-width: 1;
}
.aggregation {
fill: #ECECFF;
stroke: #9370DB;
stroke-width: 1;
}
#aggregationStart {
fill: #ECECFF;
stroke: #9370DB;
stroke-width: 1;
}
#aggregationEnd {
fill: #ECECFF;
stroke: #9370DB;
stroke-width: 1;
}
#dependencyStart {
fill: #9370DB;
stroke: #9370DB;
stroke-width: 1;
}
#dependencyEnd {
fill: #9370DB;
stroke: #9370DB;
stroke-width: 1;
}
#extensionStart {
fill: #9370DB;
stroke: #9370DB;
stroke-width: 1;
}
#extensionEnd {
fill: #9370DB;
stroke: #9370DB;
stroke-width: 1;
}
.node text {
font-family: 'trebuchet ms', verdana, arial;
font-size: 14px;
}
div.mermaidTooltip {
position: absolute;
text-align: center;
max-width: 200px;
padding: 2px;
font-family: 'trebuchet ms', verdana, arial;
font-size: 12px;
background: #ffffde;
border: 1px solid #aaaa33;
border-radius: 2px;
pointer-events: none;
z-index: 100;
}

svg {
color: rgb(0, 0, 0);
font: normal normal 400 normal 16px / normal Arial;
}
</style><g><g class="output"><g class="clusters"/><g class="edgePaths"><g class="edgePath" style="opacity: 1;"><path class="path" d="M60.55859375,55.637195415583165L35.3359375,83L35.3359375,108" marker-end="url(#arrowhead14)" style="fill:none"/><defs><marker id="arrowhead14" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M91.23046875,55.637195415583165L116.453125,83L116.453125,108" marker-end="url(#arrowhead15)" style="fill:none"/><defs><marker id="arrowhead15" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M35.3359375,146L35.3359375,171L60.11328125,197.87970721371474" marker-end="url(#arrowhead16)" style="fill:none"/><defs><marker id="arrowhead16" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M116.453125,146L116.453125,171L91.67578125,197.87970721371474" marker-end="url(#arrowhead17)" style="fill:none"/><defs><marker id="arrowhead17" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node" id="A" transform="translate(75.89453125,39)" style="opacity: 1;"><rect rx="0" ry="0" x="-15.3359375" y="-19" width="30.671875" height="38"/><g class="label" transform="translate(0,0)"><g transform="translate(-5.3359375,-9)"><foreignObject width="10.671875" height="18"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">A</div></foreignObject></g></g></g><g class="node" id="B" transform="translate(35.3359375,127)" style="opacity: 1;"><rect rx="0" ry="0" x="-15.3359375" y="-19" width="30.671875" height="38"/><g class="label" transform="translate(0,0)"><g transform="translate(-5.3359375,-9)"><foreignObject width="10.671875" height="18"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">B</div></foreignObject></g></g></g><g class="node" id="C" transform="translate(116.453125,127)" style="opacity: 1;"><rect rx="0" ry="0" x="-15.78125" y="-19" width="31.5625" height="38"/><g class="label" transform="translate(0,0)"><g transform="translate(-5.78125,-9)"><foreignObject width="11.5625" height="18"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">C</div></foreignObject></g></g></g><g class="node" id="D" transform="translate(75.89453125,215)" style="opacity: 1;"><rect rx="0" ry="0" x="-15.78125" y="-19" width="31.5625" height="38"/><g class="label" transform="translate(0,0)"><g transform="translate(-5.78125,-9)"><foreignObject width="11.5625" height="18"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">D</div></foreignObject></g></g></g></g></g></g></svg>
<!--<p>graph TD;
A--&gt;B;
A--&gt;C;
B--&gt;D;
C--&gt;D;</p>
-->`;

(async (md: string) => {
  const defaultRootWebPath = path.join(__dirname, '..');
  // console.log('defaultRootWebPath= ', defaultRootWebPath);
  const options = {
    rootWebPath: defaultRootWebPath,
  };

  const html: string = await index.mermaid2html(md, options);
  test('Should mermaid2html success', () => {
    expect(html === expectTaskList).toBeTruthy();
  });
  return;
})(taskList);
