function normalizeData(event){

   console.log("key1: ", event.key1, ", key2: ", event.key2);

   if (event.key1 > 10) {
      event.key2 = 100;
   } else {
      event.key2 = 0;
   }

}

exports.myHandler = function(event, context) {

   console.log("input data: " + event);

   if (!event) {
      return context.fail("No input");
   }

   normalizeData(event);

   if (event.key2 === 0) {
      context.succeed("OK");
   } else {
      context.fail("KO");
   }
   
   context.done("I'm done");

}