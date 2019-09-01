(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{37:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(6),o=n(1),l=(n(38),function(e,t){return e?r.a.createElement(i.c,{className:"btn",to:Object(o.b)(e).path},t):r.a.createElement("span",{className:"btn-disabled"},t)});t.a=function(e){return r.a.createElement("div",{className:"navs"},r.a.createElement("span",{className:"left"},l(e.prev,"Previous")),r.a.createElement("span",{className:"right"},l(e.next,"Next")))}},38:function(e,t,n){},39:function(e,t,n){"use strict";var a=n(8),r=n(0),i=n.n(r),o=(n(40),["abstract","assert","boolean","break","byte","case","catch","char","class","const","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while","true","false","null"]),l=["Override"],c=function(e){return e=function(e){var t=e,n=t.match(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm);if(n){var r=Object(a.a)(n);r.forEach(function(e){return t=t.replace(e,'<span style="color: lightgray; font-style: italic;">'+e+"</span>")})}return t}(e=function(e){var t=e;return l.forEach(function(e){return t=t.replace(new RegExp("@\\b"+e+"\\b","g"),'<span style="color: lightgray; font-weight: bold;">@'+e+"</span>")}),t}(e=function(e){var t=e;return o.forEach(function(e){return t=t.replace(new RegExp("\\b"+e+"\\b","g"),'<span style="color: yellow; font-weight: bold;">'+e+"</span>")}),t}(e)))};t.a=function(e){var t={__html:"<pre>"+c(e.code)+"</pre>"};return i.a.createElement("div",{dangerouslySetInnerHTML:t})}},40:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),o=n(39);t.default=function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"pageTitle"},"A Memento"),r.a.createElement("p",null,"Remember how I started the evolution section with ",r.a.createElement("em",null,"requirements don't appear out of thin air")," rant? This is going to be a testament to that."),r.a.createElement("p",null,"A perfect example of how a lazy mind can concoct the weirdest of requirement to satisfy, well the requirement of introducing a particular pattern."),r.a.createElement("p",null,"The Pattern in question is Memento. So I came up with Mystical Forest ... an arena which is mystical in nature."),r.a.createElement("p",null,r.a.createElement("em",null,"And what is the nature of this mystic?")),r.a.createElement("p",null,"At regular intervals snapshots of the life of both the fighters are taken."),r.a.createElement("p",null,"And at certain intervals one of the fighters is chosen and his life restored!!"),r.a.createElement("div",{className:"sectionTitle"},"Sample Code"),r.a.createElement(o.a,{code:"\n\n  public class MysticalForest implements ArenaMediator, BeatObserver {\n\n    int currentBeat;\n    PriorityQueue&lt;AttributeMemento&gt; championStatesQueue;\n    PriorityQueue&lt;AttributeMemento&gt; challengerStatesQueue;\n\n    ...\n\n    @Override\n    public void update() {\n      currentBeat++;\n      if (createMementoBeat()) {\n        createMemento();\n      }\n      if (restoreMementoBeat()) {\n        restoreMemento();\n      }\n    }\n\n    // saving state\n    void createMemento() {\n      AttributeMemento championLifeState = new AttributeMemento(champion.currentLife());\n      championStatesQueue.offer(championLifeState);\n      AttributeMemento challengerLifeState = new AttributeMemento(challenger.currentLife());\n      challengerStatesQueue.offer(championLifeState);\n    }\n\n    // restoring state\n    void restoreMemento() {\n      boolean restoreChampion = randomSelection();\n      if (restoreChampion) {\n        AttributeMemento championLifeState = championStatesQueue.poll();\n        champion.setLife(championLifeState.getState());\n      } else {\n        AttributeMemento challengerLifeState = challengerStatesQueue.poll();\n        challenger.setLife(challengerLifeState.getState());\n      }\n    }\n\n    static class AttributeMemento {\n      Double life;\n      AttributeMemento(double value) {\n        life = value;\n      }\n    }\n\n  }\n\n"}),r.a.createElement(i.a,{prev:"evolutionVisitors"}))}}}]);
//# sourceMappingURL=13.2c1e491f.chunk.js.map