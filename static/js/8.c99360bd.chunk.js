(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{37:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(6),o=a(1),l=(a(38),function(e,t){return e?i.a.createElement(r.c,{className:"btn",to:Object(o.b)(e).path},t):i.a.createElement("span",{className:"btn-disabled"},t)});t.a=function(e){return i.a.createElement("div",{className:"navs"},i.a.createElement("span",{className:"left"},l(e.prev,"Previous")),i.a.createElement("span",{className:"right"},l(e.next,"Next")))}},38:function(e,t,a){},39:function(e,t,a){"use strict";var n=a(8),i=a(0),r=a.n(i),o=(a(40),["abstract","assert","boolean","break","byte","case","catch","char","class","const","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while","true","false","null"]),l=["Override"],c=function(e){return e=function(e){var t=e;return l.forEach(function(e){return t=t.replace(new RegExp("@\\b"+e+"\\b","g"),'<span style="color: lightgray; font-weight: bold;">@'+e+"</span>")}),t}(e=function(e){var t=e;return o.forEach(function(e){return t=t.replace(new RegExp("\\b"+e+"\\b","g"),'<span style="color: yellow; font-weight: bold;">'+e+"</span>")}),t}(e=function(e){for(var t="",a=!0,n=0;n<e.length;n++)"\n"===e[n]?(t+="<br>",a=!0):a&&" "===e[n]?t+="&nbsp;":(a=!1,t+=e[n]);return t}(e=function(e){var t=e,a=t.match(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm);if(a){var i=Object(n.a)(a);i.forEach(function(e){return t=t.replace(e,'<span style="color: lightgray; font-style: italic;">'+e+"</span>")})}return t}(e))))};t.a=function(e){var t={__html:"<div id='pre'>"+c(e.code)+"</div>"};return r.a.createElement("div",{dangerouslySetInnerHTML:t})}},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){i=!0,r=c}finally{try{n||null==l.return||l.return()}finally{if(i)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=a(0),r=a.n(i),o=a(8),l={evolution:[{id:"evolutionMediatorCD",path:"/evolution/Evolution-Mediator-ClassDiagram.svg",text:"Mediator Class Diagram"},{id:"evolutionMediatorSD",path:"/evolution/Evolution-Mediator-SequenceDiagram.svg",text:"Mediator Sequence Diagram"},{id:"evolutionActionCommandCD",path:"/evolution/Evolution-ActionCommand-ClassDiagram.svg",text:"Action Command Class Diagram"},{id:"evolutionActionCommandSD",path:"/evolution/Evolution-ActionCommand-SequenceDiagram.svg",text:"Action Command Sequence Diagram"},{id:"evolutionStrategyTemplateCD",path:"/evolution/Evolution-ActionStrategyTemplate-ClassDiagram.svg",text:"Action Strategy and Template Class Diagram"},{id:"evolutionStrategyTemplateSD",path:"/evolution/Evolution-ActionStrategyTemplate-SequenceDiagram.svg",text:"Action Strategy and Template Sequence Diagram"},{id:"evolutionBridgeCD",path:"/evolution/Evolution-StrategyCommandBridge-ClassDiagram.svg",text:"Bridge Class Diagram"},{id:"evolutionObserverCD",path:"/evolution/Evolution-BeatObserver-ClassDiagram.svg",text:"Observer Class Diagram"},{id:"evolutionActionObserverSD",path:"/evolution/Evolution-ActionObserver-SequenceDiagram.svg",text:"Action Observer Sequence Diagram"},{id:"evolutionTikTokSD",path:"/evolution/Evolution-TikTok-SequenceDiagram.svg",text:"Tik Tok Sequence Diagram"},{id:"evolutionActionSD",path:"/evolution/Evolution-Action-SequenceDiagram.svg",text:"Action Sequence Diagram"},{id:"evolutionReactionSD",path:"/evolution/Evolution-Reaction-SequenceDiagram.svg",text:"Reaction Sequence Diagram"},{id:"evolutionDecoratorCD",path:"/evolution/Evolution-Decorator-ClassDiagram.svg",text:"Decorator Class Diagram"},{id:"evolutionDecoratorSD",path:"/evolution/Evolution-Decorator-SequenceDiagram.svg",text:"Decorator Sequence Diagram"},{id:"evolutionAdapterCD",path:"/evolution/Evolution-Adapter-ClassDiagram.svg",text:"Adapter Class Diagram"},{id:"evolutionAdapterSD",path:"/evolution/Evolution-Adapter-SequenceDiagram.svg",text:"Adapter Sequence Diagram"},{id:"evolutionCompositeCD",path:"/evolution/Evolution-Composite-ClassDiagram.svg",text:"Composite Class Diagram"},{id:"evolutionMoveVisitorCD",path:"/evolution/Evolution-MoveVisitor-ClassDiagram.svg",text:"Move Visitor Class Diagram"},{id:"evolutionMoveVisitorSD",path:"/evolution/Evolution-MoveVisitor-SequenceDiagram.svg",text:"Move Visitor Sequence Diagram"},{id:"evolutionFighterVisitorSD",path:"/evolution/Evolution-FighterVisitor-SequenceDiagram.svg",text:"Fighter Visitor Sequence Diagram"}],hierarchy:[{id:"hierarchyMove",path:"/hierarchy/Hierarchy-Move.svg",text:"Class Hierarchy of Moves"},{id:"hierarchyActionCommand",path:"/hierarchy/Hierarchy-ActionCommand.svg",text:"Class Hierarchy of ActionCommand"},{id:"hierarchyReactionCommand",path:"/hierarchy/Hierarchy-ReactionCommand.svg",text:"Class Hierarchy of ReactionCommand"},{id:"hierarchyFighter",path:"/hierarchy/Hierarchy-Fighter.svg",text:"Class Hierarchy of Fighter"}]},c=function(e){return[].concat(Object(o.a)(l.evolution),Object(o.a)(l.hierarchy)).find(function(t){return t.id===e})},s=(a(41),function(e){if(!e)return"large-content";switch(e){case"medium":return"large-content-med";case"large":return"large-content-full";case"small":default:return"large-content"}});t.a=function(e){var t=c(e.imgId),a=n(Object(i.useState)(!0),2),o=a[0],l=a[1];return r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"regular",onClick:function(){return l(!1)}},r.a.createElement("img",{className:"regular-content",src:"/KombatSim"+t.path,alt:t.text}),r.a.createElement("div",null,t.text)),r.a.createElement("div",{className:"large",style:{display:o?"none":"block"}},r.a.createElement("span",{className:"close",onClick:function(){return l(!0)}},"\xd7"),r.a.createElement("img",{className:s(e.imgSize),alt:t.text,src:"/KombatSim"+t.path}),r.a.createElement("div",{className:"caption"},t.text)))}},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(42),o=a(37),l=a(39);t.default=function(){return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"pageTitle"},"A Basic Fight Engine"),i.a.createElement("p",null,"Now what do I need to simulate a fight?"),i.a.createElement("p",null,i.a.createElement("em",null,"Fighters obviously!")," And a place where they can fight."),i.a.createElement("p",null,"Hmm... So an Arena and at least two fighters."),i.a.createElement("p",null,"They should not be tightly coupled. What I mean is that I should be able to have a fighter fight any other fighter, on any arena."),i.a.createElement("p",null,"Enter ",i.a.createElement("strong",null,"Mediator Pattern")," where we have a mediator (in my case, the arena) to mediate the different parties (in my case, the two fighters)."),i.a.createElement(r.a,{imgId:"evolutionMediatorCD"}),i.a.createElement("p",null,"Every fighter has two main functions. Attack and defend!"),i.a.createElement("p",null,"Every attack is sent to the arena, who 'mediates' and passes on the attack to the opponent to defend."),i.a.createElement(r.a,{imgId:"evolutionMediatorSD"}),i.a.createElement("div",{className:"sectionTitle"},"Sample Code"),i.a.createElement("p",null,"Most basic code ever!!"),i.a.createElement(l.a,{code:"\n\n  public interface Fighter {\n    void act();\n    void react(Move move);\n  }\n\n  public interface ArenaMediator {\n    void sendMove(Move move, Fighter fighter);\n    void addFighter(Fighter fihter);\n  }\n\n  public class AConcreteFighter implements Fighter {\n    ArenaMediator arena;\n\n    @Override\n    public void act() {\n      // create a Move\n      arena.sendMove(move, this);\n    }\n\n    @Override\n    public void react(Move move) {\n      // react to move somehow\n    }\n\n  }\n\n  public class AConcreteArena implements ArenaMediator {\n\n    Fighter champion, challenger;\n\n    @Override\n    public void sendMove(Move move, Fighter fighter) {\n      if (champion.equals(fighter))\n        challenger.react(move);\n      else\n        champion.react(move);\n    }\n\n    @Override\n    public void addFighter(Fighter fighter) {\n      // add champion and challenger\n    }\n\n  }\n\n  // setting it up\n  ArenaMediator arena = new AConcreteArena();\n  AConcreteFighter fighterA = new AConcreteFighter();\n  AConcreteFighter fighterB = new AConcreteFighter();\n  arena.addFighter(fighterA);\n  arena.addFighter(fighterB);\n\n"}),i.a.createElement(o.a,{prev:"evolutionIntro",next:"evolutionCommand"}))}}}]);
//# sourceMappingURL=8.c99360bd.chunk.js.map