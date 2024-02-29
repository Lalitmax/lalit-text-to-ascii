import figlet from "figlet";


export const toAscii = (text) => {

   return  figlet("Hello World!!", function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return err;
        }
        return data
    });
}
 
 