
function Validation() {
    this.checkEmty =function(value,spanID,message){
        // console.log('sai validate');

        if (value === "" && value.length < 4 || value.length > 6) {
            document.getElementById(spanID).innerHTML = message ;
            document.getElementById(spanID).style.display =     "block" ;
            return false
        }
        document.getElementById(spanID).innerHTML = "" ;
        document.getElementById(spanID).style.display = "none" ;
        return true ;
    }
    this.checkEmty2 =function(value,spanID,message){
        // console.log('sai validate');

        if (value === "") {
            document.getElementById(spanID).innerHTML = message ;
            document.getElementById(spanID).style.display =     "block" ;
            return false
        }
        document.getElementById(spanID).innerHTML = "" ;
        document.getElementById(spanID).style.display = "none" ;
        return true ;
    }
    this.checkID = function (value,spanID,message,mangNV) {
        var isExist = mangNV.some(function (nv,index) {
            return nv.soTK === value ;
            
        });

        if (isExist) {
            document.getElementById(spanID).innerHTML = message ;
            document.getElementById(spanID).style.display =     "block" ;
            return false
        }
        document.getElementById(spanID).innerHTML = "" ;
        document.getElementById(spanID).style.display = "none" ;
        return true ;
    }
    this.checkName = function (value,spanID,message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/  ;

        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "" ;
            document.getElementById(spanID).style.display = "none" ;
            return true ;
        }
        document.getElementById(spanID).innerHTML = message ;
        document.getElementById(spanID).style.display =     "block" ;
        return false
        
    }
    this.checkEmail = function (value,spanID,message) {
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "" ;
            document.getElementById(spanID).style.display = "none" ;
            return true ;
        }
        document.getElementById(spanID).innerHTML = message ;
        document.getElementById(spanID).style.display =     "block" ;
        return false
        
    }
    this.checkPass = function(value,spanID,message) {
        var pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/ ;  

        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "" ;
            document.getElementById(spanID).style.display = "none" ;
            return true ;
        }
        document.getElementById(spanID).innerHTML = message ;
        document.getElementById(spanID).style.display =     "block" ;
        return false
        
    }
    this.checkDay = function(value,spanID,message) {
        var pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/ ;  

        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "" ;
            document.getElementById(spanID).style.display = "none" ;
            return true ;
        }
        document.getElementById(spanID).innerHTML = message ;
        document.getElementById(spanID).style.display =     "block" ;
        return false
        
    }
    this.checkLuong = function (value,spanID,message) {
        if (value < 1e6 || value > 20e6) {
            document.getElementById(spanID).innerHTML = message ;
            document.getElementById(spanID).style.display =     "block" ;
            return false
        }
        document.getElementById(spanID).innerHTML = "" ;
        document.getElementById(spanID).style.display = "none" ;
        return true ;
    }

    this.checkChucVu = function (value,spanID,message) {
        if (value == "Chọn chức vụ") {
            document.getElementById(spanID).innerHTML = message ;
            document.getElementById(spanID).style.display =     "block" ;
            return false
        }
        document.getElementById(spanID).innerHTML = "" ;
        document.getElementById(spanID).style.display = "none" ;
        return true ;
    }
    this.checkTime = function (value,spanID,message) {
        if (value < 80 || value > 200) {
            document.getElementById(spanID).innerHTML = message ;
            document.getElementById(spanID).style.display =     "block" ;
            return false
        }
        document.getElementById(spanID).innerHTML = "" ;
        document.getElementById(spanID).style.display = "none" ;
        return true ;
    }
}