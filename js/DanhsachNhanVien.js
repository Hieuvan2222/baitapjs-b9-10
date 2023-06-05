

function DanhSachNhanVien() {
    this.mangNV =[];

    this.themNV =function (nv) {

        this.mangNV.push(nv);
    };
        
    this.timIndex = function (ma) {
            var indexFind = -1 ;
            this.mangNV.map(function(nv,index){
                if(nv.soTK === ma ){
                    indexFind = index ;
                }


            })
            console.log(indexFind)
            return indexFind ;
         }
    this.xoaNV = function (ma) {
            // index: vị trí cần xoá 
            var index = this.timIndex(ma);
            
            if(index > -1){
                this.mangNV.splice(index,1)
            }
        }

    this.capNhap = function (nv) {
        var indexFind = this.timIndex(nv.soTK);
        if(indexFind > -1 ){
            dsnv.mangNV[indexFind] = nv ;
            return true ;
        }else{
            return false ;
        }
    }
    }
