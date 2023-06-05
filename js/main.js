
const dsnv = new DanhSachNhanVien();
const validation = new Validation()

function setLocalStorage() {
  localStorage.setItem("DSNV",JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
  var dataLocal = JSON.parse(localStorage.getItem("DSNV"));
  if(dataLocal !== null){
    hienThiTable(dataLocal);
    dsnv.mangNV = dataLocal ;
  }
}
getLocalStorage()

function themNhanVien() {
    //lấy dữ liệu từ form
    var so = document.getElementById("tknv").value ;
    var ten = document.getElementById("name").value ;
    var email = document.getElementById("email").value ;
    var matKhau = document.getElementById("password").value ;
    var ngay = document.getElementById("datepicker").value ;
    var luongCB = document.getElementById("luongCB").value ;
    var chucVu = document.getElementById("chucvu").value ;
    var gio = document.getElementById("gioLam").value ;
   

 //toàn bộ dữ liệu phải đúng => thêm sinh viên 
  var isValid = true ;

    isValid &= validation.checkEmty(so,"tbTKNV","Vui lòng kiểm tra lại tài khoản ") && validation.checkID(so,"tbTKNV","Tài khoản không được trùng",dsnv.mangNV);

    isValid &= validation.checkEmty2(ten,"tbTen","Tên không được để trống ") && validation.checkName(ten,"tbTen","Tên chỉ chứa kí tự chữ ") ;

    isValid &= validation.checkEmail(email ,"tbEmail" ,"Email chưa đúng định dạng") ;

    isValid &= validation.checkPass(matKhau,"tbMatKhau" ,"Mật Khẩu chưa đúng định dạng") ;
    
    isValid &= validation.checkDay(ngay,"tbNgay","Ngày chưa đúng định dạng") ;

    isValid &= validation.checkEmty2(luongCB,"tbLuongCB","Lương không được để trống") &&  validation.checkLuong(luongCB,"tbLuongCB","Vui lòng nhập lại Lương") ;


    isValid &= validation.checkChucVu(chucVu,"tbChucVu","Chức vụ chưa hợp lệ") ;

    isValid &= validation.checkEmty2(gio,"tbGiolam","Giờ Làm không được để trống") &&  validation.checkTime(gio,"tbGiolam","Vui lòng nhập lại Lương") ;

 if(isValid){
   //tạo đối tượng sinh viên 
 var nv =new NhanVien(so,ten,email,matKhau,ngay,luongCB, chucVu,gio);
 nv.tinhLuong();
 nv.xepLoai() ;

 dsnv.themNV(nv);

 setLocalStorage();
 hienThiTable(dsnv.mangNV);

 }
 }
 document.getElementById("btnThemNV").onclick = themNhanVien


 function hienThiTable(mang) {
    var content = "" ;
    mang.map(function (nv,index){
      var trNV = `<tr>
      <td>${nv.soTK}</td>
      <td>${nv.tenNV}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.ChucVuNV}</td>  
      <td>${nv.tongLuong}</td>
      <td>${nv.XepLoai}</td>
      <td>
        <button class= "btn btn-info" onclick = "xoaNhanVien('${nv.soTK}')">Xoá</button>

        <button class= "btn btn-dark mt-2" onclick= "xemThongTin('${nv.soTK}')" data-toggle="modal"  data-target="#myModal">Xem</button>
      </td>
      </tr>`  ;
      content += trNV
    })
    // console.log(content)
    document.getElementById("tableDanhSach").innerHTML = content;
 }


 function xoaNhanVien(ma){
  dsnv.xoaNV(ma);
  hienThiTable(dsnv.mangNV);
  setLocalStorage();

}

function xemThongTin(ma) {
  console.log();
  var indexFind = dsnv.timIndex(ma);
  if(indexFind > -1){
      console.log(dsnv.mangNV[indexFind]);

      var nvFind = dsnv.mangNV[indexFind] ;

      document.getElementById("tknv").value  = nvFind.soTK;
      document.getElementById("tknv").disabled = true ;
      document.getElementById("name").value = nvFind.tenNV ;
      document.getElementById("email").value = nvFind.email ;
      document.getElementById("password").value = nvFind.matKhau ;
      document.getElementById("datepicker").value  = nvFind.ngayLam;
      document.getElementById("luongCB").value = nvFind.luongCB ;
      document.getElementById("chucvu").value = nvFind.ChucVuNV ;
      document.getElementById("gioLam").value = nvFind.gioLam ;
  }
}


function capNhatNV() {
  var so = document.getElementById("tknv").value ;
  var ten = document.getElementById("name").value ;
  var email = document.getElementById("email").value ;
  var matKhau = document.getElementById("password").value ;
  var ngay = document.getElementById("datepicker").value ;
  var luongCB = document.getElementById("luongCB").value ;
  var chucVu = document.getElementById("chucvu").value ;
  var gio = document.getElementById("gioLam").value ;
 
  var isValid = true ;

  isValid &= validation.checkEmty2(ten,"tbTen","Tên không được để trống ") && validation.checkName(ten,"tbTen","Tên chỉ chứa kí tự chữ ") ;

  isValid &= validation.checkEmail(email ,"tbEmail" ,"Email chưa đúng định dạng") ;

  isValid &= validation.checkPass(matKhau,"tbMatKhau" ,"Mật Khẩu chưa đúng định dạng") ;
  
  isValid &= validation.checkDay(ngay,"tbNgay","Ngày chưa đúng định dạng") ;

  isValid &= validation.checkEmty2(luongCB,"tbLuongCB","Lương không được để trống") &&  validation.checkLuong(luongCB,"tbLuongCB","Vui lòng nhập lại Lương") ;


  isValid &= validation.checkChucVu(chucVu,"tbChucVu","Chức vụ chưa hợp lệ") ;

  isValid &= validation.checkEmty2(gio,"tbGiolam","Giờ Làm không được để trống") &&  validation.checkTime(gio,"tbGiolam","Vui lòng nhập lại Lương") ;



  if (isValid) {
    var nv =new NhanVien(so,ten,email,matKhau,ngay,luongCB, chucVu,gio);
    nv.tinhLuong();
    nv.xepLoai() ;
    
    var result = dsnv.capNhap(nv);
    if(result){
      setLocalStorage() ;
      hienThiTable(dsnv.mangNV) ;
      resetForm();
    }else{
      alert ("cập nhập thất bại")
    }
  }
 
  
}
document.getElementById("btnCapNhat").onclick = capNhatNV ;



function resetForm() {
  document.getElementById("formQLNV").reset();
  document.getElementById("tknv").disabled = false ;
}
document.getElementById("btnReset").onclick = resetForm ;



