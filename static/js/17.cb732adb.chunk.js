(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{37:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(6),l=t(1),u=(t(38),function(e,n){return e?r.a.createElement(i.c,{className:"btn",to:Object(l.b)(e).path},n):r.a.createElement("span",{className:"btn-disabled"},n)});n.a=function(e){return r.a.createElement("div",{className:"navs"},r.a.createElement("span",{className:"left"},u(e.prev,"Previous")),r.a.createElement("span",{className:"right"},u(e.next,"Next")))}},38:function(e,n,t){},39:function(e,n,t){"use strict";var a=t(8),r=t(0),i=t.n(r),l=(t(40),["abstract","assert","boolean","break","byte","case","catch","char","class","const","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while","true","false","null"]),u=["Override"],o=function(e){return e=function(e){var n=e,t=n.match(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm);if(t){var r=Object(a.a)(t);r.forEach(function(e){return n=n.replace(e,'<span style="color: lightgray; font-style: italic;">'+e+"</span>")})}return n}(e=function(e){var n=e;return u.forEach(function(e){return n=n.replace(new RegExp("@\\b"+e+"\\b","g"),'<span style="color: lightgray; font-weight: bold;">@'+e+"</span>")}),n}(e=function(e){var n=e;return l.forEach(function(e){return n=n.replace(new RegExp("\\b"+e+"\\b","g"),'<span style="color: yellow; font-weight: bold;">'+e+"</span>")}),n}(e)))};n.a=function(e){var n={__html:"<pre>"+o(e.code)+"</pre>"};return i.a.createElement("div",{dangerouslySetInnerHTML:n})}},40:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(37),l=t(6),u=t(1),o=t(39);n.default=function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"pageTitle"},"A Builder on Loan?"),r.a.createElement("p",null,"Yep, you read it right. It's a ",r.a.createElement("em",null,"Loan"),"(not lone) Builder."),r.a.createElement("p",null,"A Formal definition of the ",r.a.createElement("strong",null,"Loaner Pattern")," that I could find:"),r.a.createElement("blockquote",null,r.a.createElement("p",null,r.a.createElement("em",null,"When a pair of actions have to be taken together, you can use a HigherOrderFunction that wraps the actions around the function that is passed in."))),r.a.createElement("p",null,"Done scratching your head? Allow me to dumb it down for you."),r.a.createElement("p",null,"Let's go back to the ",r.a.createElement("strong",null,"Builder Pattern")," example from an ",r.a.createElement(l.b,{to:Object(u.b)("evolutionCreators").path},"earlier section"),"."),r.a.createElement(o.a,{code:'\n\n  public class AmateurFighters extends FighterFactory {\n\n    ...\n\n    @Override\n    public Fighter getFighter(\n        String fighterSubtype, ArenaMediator arena, String name) {\n      switch (fighterSubtype) {\n        case NERD:\n            return new AmateurFighterBuilder(arena, name, fighterSubtype)\n                        .withLife(20)\n                        .withStrength(10)\n                        .withDexterity(20)\n                        .withKick()\n                        .withEvade()\n                        .build();\n        case BULLY:\n            return new AmateurFighterBuilder(arena, name, fighterSubtype)\n                        .withLife(60)\n                        ...\n                        .build();\n        case CAPTAIN:\n            ...\n      }\n    }\n\n\n    // internal builder\n    private static class AmateurFighterBuilder {\n\n      ...\n\n      AmateurFighterBuilder(\n          ArenaMediator arena, String name, String fighterSubtype) {\n        ...\n      }\n\n      AmateurFighterBuilder withDexterity(double dexterity) {\n        this.dexterity = dexterity;\n        return this;\n      }\n\n      ...\n\n      Amateur build() {\n        Amateur fighter = new Amateur(name, arena, fighterSubtype);\n        fighter.addDexterity(dexterity);\n        ...\n        \n        if (punch)\n          fighter.addAction(new Punch(fighter));\n\n        ...\n\n        return fighter;\n      }\n\n    }\n\n  }\n\n  // Setting it up\n  Fighter nerd = FighterFactory.getFactory(AmateurFighters.FACTORY)\n                    .getFighter(AmateurFighters.NERD, arena, "Some Nerd");\n\n'}),r.a.createElement("p",null,"The biggest advantage for having a Builder is the ease with which the object creation happens. Instead of having to look into documentation for what goes in a constructor, the builder just ",r.a.createElement("em",null,"flows"),"."),r.a.createElement("p",null,"What if we try something similar for ",r.a.createElement("code",null,"FireDamage"),"?"),r.a.createElement(o.a,{code:"\n\n  public class FireDamage implements Move {\n\n    double damageAmount;\n    int burnDuration;\n    double burnDamage;\n\n    private FireDamage(double damage, int burnDuration, double burnDamage) {\n      this.damageAmount = damage;\n      this.burnDuration = burnDuration;\n      this.burnDamage = burnDamage;\n    }\n\n    @Override\n    public void affect(Fighter fighter) {\n\n    }\n    \n  }\n\n"}),r.a.createElement("p",null,"In the FighterFactories, we have an internal builder which is only used by the outer Factory. The Builder keeps the nitty-gritty of creating and setting up a Fighter to itself. The client request and gets back a Fighter ready for action. Perfect encapsulation."),r.a.createElement("p",null,"But may I remind you that FireDamage gets instantiated from multiple places with dynamic values! ",r.a.createElement("em",null,"A private builder is out of the question!!!")),r.a.createElement(o.a,{code:"\n\n  public static class FireDamageBuilder {\n\n    double min, max;\n    double damage;\n    int duration;\n\n    public FireDamageBuilder() {}\n\n    public FireDamageBuilder min(double m) {\n      this.min = m;\n      return this;\n    }\n\n    public FireDamageBuilder max(double m) {\n      this.max = m;\n      return this;\n    }\n\n    public FireDamageBuilder burnDamage(double d) { ... }\n\n    public FireDamageBuilder duration(int d) { ... }\n\n    public FireDamage build() {\n      FireDamage d = new FireDamage(randomDoubleInRange(min, max), duration, damage);\n    }\n  }\n\n  // usage\n  FireDamageBuilder builder = new FireDamageBuilder();\n  FireDamage fire = builder\n                        .min(10)\n                        .max(20)\n                        .duration(5)\n                        .burnDamage(8)\n                        .build();\n\n"}),r.a.createElement("p",null,"So what if we have an exposed builder?"),r.a.createElement("p",null,"Well, the client can now reuse the builder."),r.a.createElement("p",null,"While fine for our ",r.a.createElement("code",null,"FireDamageBuilder"),", not so cool if the builder has 100s of properties setup. That's a bug cultivator!"),r.a.createElement("p",null,"That's where ",r.a.createElement("strong",null,"Loaner Pattern")," comes into the picture!"),r.a.createElement("p",null,"Here's what you do.",r.a.createElement("ul",null,r.a.createElement("li",null,"Make ",r.a.createElement("code",null,"FireDamageBuilder")," an inner class of ",r.a.createElement("code",null,"FireDamage"),"."),r.a.createElement("li",null,"Make the constructor and the build() method of the builder private."),r.a.createElement("li",null,"Add static method create() to ",r.a.createElement("code",null,"FireDamage")," which loans the builder."))),r.a.createElement(o.a,{code:"\n\n  public class FireDamage implements Move {\n    \n    ...\n\n    private FireDamage(double damage, int burnDuration, double burnDamage) { ... }\n\n    ...\n\n    public static FireDamage create(Consumer&lt;FireDamageBuilder&gt; block) {\n      FireDamageBuilder builder = new FireDamageBuilder();\n      block.accept(builder);\n      return builder.build();\n    }\n\n    public static class FireDamageBuilder {\n\n      ...\n\n      private FireDamageBuilder() {}\n\n      ...\n\n      private FireDamage build() { ... }\n\n    }\n\n  }\n\n  // usage\n  FireDamage fire = FireDamage.create(builder -> \n          builder\n            .min(10)\n            .max(20)\n            .duration(5)\n            .burnDamage(8)\n  );\n\n"}),r.a.createElement("p",null,"No more shared builder. You get a builder on loan, you set it up and that's it!"),r.a.createElement(i.a,{prev:"lambdaDecorator",next:"lambdaBuilder"}))}}}]);
//# sourceMappingURL=17.cb732adb.chunk.js.map