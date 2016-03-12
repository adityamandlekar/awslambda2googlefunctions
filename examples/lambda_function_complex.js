function veryComplexFunction(event, context, key){

   if (!('event' in event)) {
      console.log("Found event in event: ", event['event']);
      return context.fail("Event is " + event.event);
   }

   if (event.key3 !== key) {
      console.log("Invalid key3: ", event['key3']);
      return context.fail("Invalid key: " + event.key3);
   }

   event.event = key;

   return event['key1'] == event.key2;
}

function parseData(event, context){

   console.log("key1: ", event.key1, ", key2: ", event.key2);
   console.log("normalizing for ", context.functionName);

   if (event.key1 > 10) {
      event.key2 = 100;
   } else {
      event.key2 = 0;
   }

   var isOK = veryComplexFunction(event, context, "my-secret-key");

   console.log("Remaining time: ", context.getRemainingTimeInMillis());

   if (!isOK) {
      return context.fail("KO");
   }

   context.succeed("OK");

}

exports.myHandler = function(event, context) {

   console.log("input data: " + event);

   if (!event) {
      return context.fail("No input");
   }

   parseData(event, context);

   context.done("I'm done");

}
