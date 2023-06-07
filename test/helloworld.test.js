import hello from "../utils/hello.mjs";
import assert from 'assert';


it("Should say Alejandro",() => {
    const helloString = hello();
    //const hello = hello();
    console.log(helloString);
    //console.log(hello);

   // expect(helloString).toBe("Alejandro");
   assert.equal(helloString,"Alejandro");
})