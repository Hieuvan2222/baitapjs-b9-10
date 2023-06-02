
const dsnv = new DanhSachNhanVien();


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
   
console.log(so,ten,email,matKhau,ngay,luongCB,chucVu,gio)

//tạo đối tượng sinh viên 
var nv =new NhanVien(so,ten,email,matKhau,ngay,luongCB,chucVu,gio);
nv.tinhLuong();
nv.xepLoai() ;
console.log(nv) 
dsnv.themNV(nv);
console.log(dsnv.mangNV)
hienThiTable(dsnv.mangNV)

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

        <button class= "btn btn-dark mt-2">Xem</button>
      </td>
      </tr>`  ;
      content += trNV
    })
    // console.log(content)
    document.getElementById("tableDanhSach").innerHTML = content;
}


function xoaNhanVien(ma){
  dsnv.xoaNV(ma)
hienThiTable(dsnv.mangNV)

}

