//Write your code here
class API {
    constructor(url) {
        this.url = url;
        this.arr = this.url.split("://"); 
        this.secure = this.arr[0] === "https";
    }

    isSecure() {
        return this.arr[0] === "https";
    }
}



//Do not remove this code
module.exports = { API }
