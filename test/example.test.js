// if (typeof NS == 'undefined') { NS = {}; }

// NS.myFunction = {
//     //empty stuff array, filled during initialization
//     stuff: [],

//     init: function init() {
//         this.stuff.push('Testing');
//     },
//     reset: function reset() {
//         this.stuff = [];
//     },
//     //will add new functionality here later
// };

// NS.myFunction.init();

// describe("myFunction", function() {
//     var myfunc = NS.myFunction;

//     beforeEach(function(){
//         spyOn(myfunc, 'init').andCallThrough();
//     });

//     afterEach(function() {
//         myfunc.reset();
//     });

//     it("should be able to initialize", function() {
//         expect(myfunc.init).toBeDefined();
//         myfunc.init();
//         expect(myfunc.init).toHaveBeenCalled();
//     });

//     it("should populate stuff during initialization", function(){
//         myfunc.init();
//         expect(myfunc.stuff.length).toEqual(1);
//         expect(myfunc.stuff[0]).toEqual('Testing');
//     });
//     //will insert additional tests here later
// });
