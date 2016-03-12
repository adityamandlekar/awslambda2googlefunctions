function veryComplexFunction(context, data, key){

   if (!('event' in data)) {
      console.log("Found event in event: ", data['event']);
      return context.failure("Event is " + data.event);
   }

   if (data.key3 !== key) {
      console.log("Invalid key3: ", data['key3']);
      return context.failure("Invalid key: " + data.key3);
   }

   data.event = key;

   return data['key1'] == data.key2;
}

function parseData(context, data){

   console.log("key1: ", data.key1, ", key2: ", data.key2);
   /* TODO: fix me!
	console.log("normalizing for ", context.functionName);
	*/

   if (data.key1 > 10) {
      data.key2 = 100;
   } else {
      data.key2 = 0;
   }

   var isOK = veryComplexFunction(context, data, "my-secret-key");

   /* TODO: fix me!
	console.log("Remaining time: ", context.getRemainingTimeInMillis());
	*/

   if (!isOK) {
      return context.failure("KO");
   }

   context.success("OK");

}

exports.myHandler = function(context, data) {

   console.log("input data: " + data);

   if (!data) {
      return context.failure("No input");
   }

   parseData(context, data);

   context.done("I'm done");

}
