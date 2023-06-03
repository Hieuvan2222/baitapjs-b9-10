function NhanVien(so,ten,email,matKhau,ngay,luongCB,chucVu,gio) {
    //thuộc tính
    this.soTK = so;
    this.tenNV = ten;
    this.email = email;
    this.matKhau = matKhau ;    
    this.ngayLam = ngay ;
    this.luongCB = luongCB ;
    this.ChucVuNV = chucVu;
    this.tongLuong = 0 ;
    this.gioLam = gio ;
    this.XepLoai = "" ;
    //phương thức
        this.tinhLuong = function () {
            this.tongLuong = 0  ;
            if(this.ChucVuNV == "Sếp"){
                this.tongLuong = this.luongCB * 3; 
            }else if ( this.ChucVuNV == "Trưởng phòng"){
                this.tongLuong = this.luongCB * 2
            }else{
            this.tongLuong = this.luongCB
        }}
        this.xepLoai = function(){
           if (this.gioLam >= 192){
             this.XepLoai = "Xuất xét" ;
           }else if(this.gioLam >= 176 && this.gioLam < 192){
              this.XepLoai = "Giỏi";
           }else if(this.gioLam >= 160 && this.gioLam < 176){
            this.XepLoai ="Khá";
           }
           else{
            this.XepLoai = "Trung bình";
           }
        }
}