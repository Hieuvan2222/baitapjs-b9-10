

function DanhSachNhanVien() {
    this.mangNV =[];

    this.themNV =function (nv) {

        this.mangNV.push(nv);
        
         this.timIndex = function (ma) {
            var indexFind = -1 ;
            this.mangNV.map(function(sv,index){
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
            // console.log(index)
            if(index > -1){
                this.mangNV.splice(index,1)
            }
        }
    }
}