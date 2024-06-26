import person from "../model/person.js";

export default class student extends person{
    constructor(_code, _email, _hoTen, _diaChi, _diemToan, _diemLy, _diemHoa) {
        super(_code, _email, _hoTen, _diaChi);
        this.diemToan = _diemToan;
        this.diemLy = _diemLy;
        this.diemHoa = _diemHoa;
    }

    calculateDiemTrungBinh() {
        console.log(this.diemToan + this.diemLy + this.diemHoa);
        return ((parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 3.0).toFixed(2);
    }

}