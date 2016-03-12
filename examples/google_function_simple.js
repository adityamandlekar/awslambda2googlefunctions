function normalizeData(data){

   console.log("key1: ", data.key1, ", key2: ", data.key2);

   if (data.key1 > 10) {
      data.key2 = 100;
   } else {
      data.key2 = 0;
   }

}

exports.myHandler = function(context, data) {

   console.log("input data: " + data);

   if (!data) {
      return context.failure("No input");
   }

   normalizeData(data);

   if (data.key2 === 0) {
      context.success("OK");
   } else {
      context.failure("KO");
   }
   
   context.done("I'm done");

}