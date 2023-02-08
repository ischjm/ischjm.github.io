(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{377:function(t,a,i){"use strict";i.r(a);var s=i(0),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dfa-foundations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dfa-foundations"}},[t._v("#")]),t._v(" DFA - Foundations")]),t._v(" "),a("h2",{attrs:{id:"iterative-algorithm-another-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterative-algorithm-another-view"}},[t._v("#")]),t._v(" Iterative Algorithm, Another View")]),t._v(" "),a("p",[t._v("一个有K个节点的CFG，迭代算法在每次迭代的过程中，会更新每个节点的OUT信息，表示为"),a("strong",[t._v("OUT[n]")]),t._v("。")]),t._v(" "),a("p",[t._v("假设在Data Flow Analysis中的值域是V，那么我们可以定义一个K-tuple：")]),t._v(" "),a("p",[a("code",[t._v("(OUT[n1],OUT[n2],...OUT[nk])")])]),t._v(" "),a("p",[t._v("每个Node的OUT值作为K-tuple的一个元素。因为每个OUT[n]对应的值域都是V，那么K-tuple所对应的一个值域就是V的product，即"),a("code",[t._v("(V1 x V2 ... x Vk)")]),t._v("，定义为V"),a("sup",[t._v("k")]),t._v("。")]),t._v(" "),a("p",[t._v("一次迭代是一个动作，可以表示为一个函数"),a("code",[t._v("F: Vk -> Vk")]),t._v("。")]),t._v(" "),a("p",[t._v("那么，这个算法可以看成每个迭代输出一个K-tuples值，直到最后K-tuples不再发生变化。")]),t._v(" "),a("p",[t._v("根据以上所说的步骤，我们可以将算法图示如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213221155559.png",alt:"image-20220213221155559"}})]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("X = F(X)")]),t._v("时，X是F的一个不动点。迭代算法也就达到了一个不动点(reach a fixed point)。")]),t._v(" "),a("p",[t._v("对于上面的迭代算法会有以下的问题：")]),t._v(" "),a("ul",[a("li",[t._v("对于一个普遍的算法，它能停吗？一定可以达到一个不动点吗？一定会输出一个结果吗？")]),t._v(" "),a("li",[t._v("如果能达到不动点，一定只有一个吗？如果不止一个，那么我们得出的这个不动点是最精确的吗？")]),t._v(" "),a("li",[t._v("如果能达到不动点，那么我们最坏情况下能够得到结果？")])]),t._v(" "),a("p",[t._v("下面是解决以上问题的"),a("strong",[t._v("理论基础")]),t._v("~")]),t._v(" "),a("h2",{attrs:{id:"partial-order-偏序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partial-order-偏序"}},[t._v("#")]),t._v(" Partial Order - 偏序")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213222646293.png",alt:"image-20220213222646293"}})]),t._v(" "),a("p",[t._v("定义一个偏序集(P,<=)，P是一个集合，<=是一个偏序关系，当<=满足如下的特性，则构成一个偏序集。")]),t._v(" "),a("ul",[a("li",[t._v("自反性：任意x属于P，x <= x")]),t._v(" "),a("li",[t._v("反对称性： 任意的x,y 属于P, x <= y 并且 y <= x，那么 x = y")]),t._v(" "),a("li",[t._v("传递性： 任意x,y,z 属于P，x <= y 并且 y <= z，那么 x <= z")])]),t._v(" "),a("p",[t._v("栗子：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("给定(S,<=),S是一个整数集合，偏序关系是<=。")]),t._v(" "),a("ul",[a("li",[t._v("自反性 1<=1 , 2 <= 2  √")]),t._v(" "),a("li",[t._v("反对称性： x <= y y <= x x = y √")]),t._v(" "),a("li",[t._v("传递性： 1<=2<=3 , 1<=3  √")])])]),t._v(" "),a("li",[a("p",[t._v("给定(S,<),S是一个整数集合，偏序关系是<。")]),t._v(" "),a("ul",[a("li",[t._v("自反性 1 < 1 , 2 < 2  ×")])])]),t._v(" "),a("li",[a("p",[t._v("给定(S,<=),S是一个英文单词的集合，偏序关系是 子串关系。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213223249639.png",alt:"image-20220213223249639"}})]),t._v(" "),a("ul",[a("li",[t._v("自反性：每一个string是自己的substring  √")]),t._v(" "),a("li",[t._v("反对称性：如果一个string是另一个string的substring，同时substring的substring是string，则string和substring相同     √")]),t._v(" "),a("li",[t._v("传递性：str1是str2的substring，str2是str3的substring，则str1是str3的substring   √")])])])]),t._v(" "),a("p",[t._v("偏序指的是集合中的任意两个元素可以不存在比较性，比如上图中的pin sin 并不满足偏序关系，下图的{a},{b}也不满足偏序关系。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("给定(S,<=),S是一个幂集，偏序关系是子集。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213223708803.png",alt:"image-20220213223708803"}})]),t._v(" "),a("ul",[a("li",[t._v("自反性 √")]),t._v(" "),a("li",[t._v("反对称性 √")]),t._v(" "),a("li",[t._v("传递性 √")])])])]),t._v(" "),a("h2",{attrs:{id:"upper-and-lower-bounds-上下界"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upper-and-lower-bounds-上下界"}},[t._v("#")]),t._v(" Upper and Lower Bounds - 上下界")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213224914278.png",alt:"image-20220213224914278"}})]),t._v(" "),a("p",[t._v("给定一个偏序集(P,<=)，存在一个子集S,对于任意元素u属于P，当任意元素x属于S,满足x<=u，则u是S的一个上界；同样的，对于任意元素l属于P, 当任意元素x属于S，满足l<=x，则l是S的一个下界。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213224518987.png",alt:"image-20220213224518987"}})]),t._v(" "),a("p",[t._v("最小上界，最大下界")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213224703466.png",alt:"image-20220213224703466"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213224925967.png",alt:"image-20220213224925967"}})]),t._v(" "),a("p",[t._v("当集合S只包含两个元素时，可以用如下写法：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213224943303.png",alt:"image-20220213224943303"}})]),t._v(" "),a("p",[t._v("一些性质：")]),t._v(" "),a("ul",[a("li",[t._v("不是每一个偏序集都有lub和glb")]),t._v(" "),a("li",[t._v("一个偏序集如果有lub或者glb，那么是唯一的。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220213225419778.png",alt:"image-20220213225419778"}})]),t._v(" "),a("h2",{attrs:{id:"lattice-semilattice-complete-and-product-lattice-格、半格、全格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lattice-semilattice-complete-and-product-lattice-格、半格、全格"}},[t._v("#")]),t._v(" Lattice, Semilattice, Complete and Product Lattice - 格、半格、全格")]),t._v(" "),a("h3",{attrs:{id:"lattice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lattice"}},[t._v("#")]),t._v(" Lattice")]),t._v(" "),a("p",[t._v("给定一个偏序集(P,<=),任意的P内元素a,b，如果最小上界和最大下界都存在，则我们称偏序集是一格。")]),t._v(" "),a("p",[t._v("偏序集中每两个元素都有最小上界和最大下界我们就称该偏序集是一个格。")]),t._v(" "),a("p",[t._v("栗子：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("给定(S,<=),S是一个整数集合，偏序关系是<=。")]),t._v(" "),a("ul",[a("li",[t._v("任意两个元素的max和min是最小上界、最大下界。")])])]),t._v(" "),a("li",[a("p",[t._v("给定(S,<=),S是一个英文单词的集合，偏序关系是 子串关系。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214134313397.png",alt:"image-20220214134313397"}})]),t._v(" "),a("ul",[a("li",[t._v("pin 和 sin 没有上界")])])]),t._v(" "),a("li",[a("p",[t._v("给定(S,<=),S是一个幂集，偏序关系是子集。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214134402188.png",alt:"image-20220214134402188"}})])])]),t._v(" "),a("h3",{attrs:{id:"semilattice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semilattice"}},[t._v("#")]),t._v(" Semilattice")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214134740324.png",alt:"image-20220214134740324"}})]),t._v(" "),a("p",[t._v("给定一个偏序集(P,<=)，任意a,b属于P")]),t._v(" "),a("p",[t._v("如果只存在一个最小上界的话，则称为join的半格")]),t._v(" "),a("p",[t._v("如果只存在一个最大下界的话，则称为meet的半格")]),t._v(" "),a("h3",{attrs:{id:"complete-lattice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complete-lattice"}},[t._v("#")]),t._v(" Complete Lattice")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214134805293.png",alt:"image-20220214134805293"}})]),t._v(" "),a("p",[t._v("给定一个格(P,<=)，对于每一个P的子集S，都存在S的最小上界和最大下界，则称(P,<=)为全格。")]),t._v(" "),a("p",[t._v("一个lattice的所有子集都有最小上界和最大下界。")]),t._v(" "),a("p",[t._v("栗子：")]),t._v(" "),a("ol",[a("li",[t._v("给定(S,<=),S是一个整数集合，偏序关系是<=。\n"),a("ul",[a("li",[t._v("对于正整数集合，是无穷的没有边界，因此存在一个最大下界，不存在最小上界。因此不是全格。")])])]),t._v(" "),a("li",[t._v("给定(S,<=),S是一个幂集，偏序关系是子集。\n"),a("ul",[a("li",[t._v("所有的subset都有最小上界和最大下界。")])])])]),t._v(" "),a("p",[t._v("​\t"),a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214135141825.png",alt:"image-20220214135141825"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214135319489.png",alt:"image-20220214135319489"}})]),t._v(" "),a("p",[t._v("每一个全格都有一个最大的元素top，和最小的元素bottom。")]),t._v(" "),a("p",[t._v("只要complete lattice是有穷的，一定是全格。一个全格一定是有穷的吗？  0-1之间的所有的实数是全格，但是是无穷的。")]),t._v(" "),a("blockquote",[a("p",[t._v("在大部分情况下我们data flow analysis中使用的都是有穷的全格。")])]),t._v(" "),a("h3",{attrs:{id:"product-lattice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-lattice"}},[t._v("#")]),t._v(" Product Lattice")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214141549710.png",alt:"image-20220214141549710"}})]),t._v(" "),a("p",[t._v("给定一些格"),a("code",[t._v("L1=(P1,<=1),L2=(P2,<=2)...Ln=(Pn,<=n)")]),t._v(",如果每一个lattice都存在一个最小上界和最大下界。则我们可以定义一个product lattice "),a("code",[t._v("Ln = (P,<=)")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("P = P1 x ... x Pn")])]),t._v(" "),a("li",[a("code",[t._v("(x1,...,xn) <= (y1,...,yn) <=> (x1 <= y1)且...且(xn <= yn)")])]),t._v(" "),a("li",[a("code",[t._v("(x1,...,xn) , (y1,...,yn)的最小上界 = (x1和y1的最小上界,...,xn和yn的最小上界)")])]),t._v(" "),a("li",[a("code",[t._v("(x1,...,xn) , (y1,...,yn)的最大下界 = (x1和y1的最大下界,...,xn和yn的最大下界)")])])]),t._v(" "),a("p",[t._v("性质：")]),t._v(" "),a("ul",[a("li",[t._v("一个product lattice是一个lattice")]),t._v(" "),a("li",[t._v("一个product lattice L中的每一个lattice都是complete，那么L也是complete。")])]),t._v(" "),a("h2",{attrs:{id:"data-flow-analysis-framework-via-lattice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-flow-analysis-framework-via-lattice"}},[t._v("#")]),t._v(" Data Flow Analysis Framework via Lattice")]),t._v(" "),a("p",[t._v("有了上面的理论基础，就可以利用理论基础进行data flow analysis了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214142409693.png",alt:"image-20220214142409693"}})]),t._v(" "),a("p",[t._v("data flow analysis的基本框架由以下三个元素构成：")]),t._v(" "),a("ul",[a("li",[t._v("D：数据流的而方向，forwards还是backwards")]),t._v(" "),a("li",[t._v("L：一个格包含值域V和操作符 join or meet")]),t._v(" "),a("li",[t._v("F：transfer functions")])]),t._v(" "),a("p",[t._v("栗子：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214142808259.png",alt:"image-20220214142808259"}})]),t._v(" "),a("p",[t._v("在lattice上不断地使用meet或者join，借助transfer functions进行迭代。")]),t._v(" "),a("p",[t._v("回到上面提出的问题：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对于一个普遍的算法，它能停吗？一定可以达到一个不动点吗？一定会输出一个结果吗？")]),t._v(" "),a("ul",[a("li",[t._v("lattice函数的单调性问题")])])]),t._v(" "),a("li",[a("p",[t._v("如果能达到不动点，一定只有一个吗？如果不止一个，那么我们得出的这个不动点是最精确的吗？")]),t._v(" "),a("ul",[a("li",[t._v("可以，X=F(X)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214143737816.png",alt:"image-20220214143737816"}})]),t._v(" "),a("ul",[a("li",[t._v("函数单调性，不动点定理。")])])]),t._v(" "),a("li",[a("p",[t._v("如果能达到不动点，那么我们最坏情况下能够得到结果？")])])]),t._v(" "),a("h2",{attrs:{id:"monotonicity-and-fixed-point-theorem-函数单调性和不动点定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monotonicity-and-fixed-point-theorem-函数单调性和不动点定理"}},[t._v("#")]),t._v(" Monotonicity and Fixed Point Theorem - 函数单调性和不动点定理")]),t._v(" "),a("h3",{attrs:{id:"函数单调性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数单调性"}},[t._v("#")]),t._v(" 函数单调性")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214144006111.png",alt:"image-20220214144006111"}})]),t._v(" "),a("p",[t._v("一个function f: L -> L(L是一个lattice)，如果函数f是单调的，那么任意的x,y属于L，如果x<=y => f(x) <= f(y)")]),t._v(" "),a("h3",{attrs:{id:"不动点定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不动点定理"}},[t._v("#")]),t._v(" 不动点定理")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214144418328.png",alt:"image-20220214144418328"}})]),t._v(" "),a("p",[t._v("给定一个全格(L,<=),如果满足如下结论：")]),t._v(" "),a("ol",[a("li",[t._v("f: L -> L 是单调的")]),t._v(" "),a("li",[t._v("L是有穷的")])]),t._v(" "),a("p",[t._v("那么，我们能求得f的最小不动点，通过迭代f(bottom),f(f(bottom)),...,fk(bottom)直到达到一个不动点，该不动点就是最小不动点。最大不动点是通过迭代f(top),f(f(top)),...,fk(top)直到达到一个不动点，该不动点就是最大不动点。")]),t._v(" "),a("p",[t._v("存在不动点证明：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214145143761.png",alt:"image-20220214145143761"}})]),t._v(" "),a("p",[t._v("最小不动点证明：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214145601411.png",alt:"image-20220214145601411"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-1251603812.cos.ap-shanghai.myqcloud.com/images/image-20220214150052891.png",alt:"image-20220214150052891"}})]),t._v(" "),a("h2",{attrs:{id:"relate-iterative-algorithm-to-fixed-point-theorem-迭代算法转化为不动点定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relate-iterative-algorithm-to-fixed-point-theorem-迭代算法转化为不动点定理"}},[t._v("#")]),t._v(" Relate Iterative Algorithm to Fixed Point Theorem - 迭代算法转化为不动点定理")]),t._v(" "),a("h2",{attrs:{id:"may-must-analysis-a-lattice-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#may-must-analysis-a-lattice-view"}},[t._v("#")]),t._v(" May/Must Analysis, A Lattice View")]),t._v(" "),a("h2",{attrs:{id:"distributivity-and-mop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distributivity-and-mop"}},[t._v("#")]),t._v(" Distributivity and MOP")]),t._v(" "),a("h2",{attrs:{id:"constant-propagation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constant-propagation"}},[t._v("#")]),t._v(" Constant Propagation")]),t._v(" "),a("h2",{attrs:{id:"work-list-algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-list-algorithm"}},[t._v("#")]),t._v(" Work-list Algorithm")])])}),[],!1,null,null,null);a.default=v.exports}}]);