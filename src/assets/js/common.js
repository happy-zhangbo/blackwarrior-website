const auth = require("./auth");
const Swal = require("sweetalert2");
function demo(){
    console.log(Swal);
    Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
    )
}

function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr == document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}


function isMobile() {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return !flag;
}

function getSignData(account){
    return JSON.stringify({
        "types": {
            "EIP712Domain": [{
                "name": "name",
                "type": "string"
            }, {
                "name": "version",
                "type": "string"
            }, {
                "name": "chainId",
                "type": "uint256"
            }, {
                "name": "verifyingContract",
                "type": "address"
            }, {
                "name": "salt",
                "type": "bytes32"
            }],
            "AKYC": [{
                "name": "user",
                "type": "string"
            }, {
                "name": "proof",
                "type": "string"
            }, {
                "name": "useraddress",
                "type": "address"
            }]
        },
        "domain": {
            "name": "spacebugsnft.io",
            "version": "2",
            "chainId": 2022,
            "verifyingContract": "0x1C56346CD2A2Bf3202F771f50d3D14a367B48070",
            "salt": "0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"
        },
        "primaryType": "AKYC",
        "message": {
            "user": "Space Bug",
            "proof": "Validate Bug Owner address "+account,
            "useraddress": account
        }
    });
}

function isLogin() {
    return auth.getToken();
}


module.exports = {
    demo,
    setCookie,
    getCookie,
    delCookie,
    isMobile,
    getSignData,
    isLogin,

}
