function test() {
    let number1 = +document.getElementById('year1').value;
    let number2 = +document.getElementById('year2').value;
    var n = ""
    if (number1 == '' || number2 == '') {
        alert('Vui lòng điền đầy đủ thông tin')
        return
    } else {
        a = number1 % 12;
        b = number2 % 12;
        switch (a) {
            case 0:
                n = "Thân";
                if (b == 6 || b == 3 || b == 9) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 4 || b == 8) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 1:
                n = "Dậu";
                if (b == 4 || b == 7 || b == 10) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 5 || b == 9) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 2:
                n = "Tuất";
                if (b == 8 || b == 5 || b == 11) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 6 || b == 10) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 3:
                n = "Hợi";
                if (b == 6 || b == 0 || b == 9) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 11 || b == 7) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 4:
                n = "Tý";
                if (b == 7 || b == 10 || b == 1) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 8 || b == 0) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 5:
                n = "Sửu";
                if (b == 8 || b == 11 || b == 2) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 6 || b == 9) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 6:
                n = "Dần";
                if (b == 3 || b == 9 || b == 0) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 2 || b == 10) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 7:
                n = "Mẹo";
                if (b == 10 || b == 1 || b == 4) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 11 || b == 3) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 8:
                n = "Thìn";
                if (b == 11 || b == 2 || b == 5) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 4 || b == 1) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 9:
                n = "Tỵ";
                if (b == 3 || b == 0 || b == 6) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 5 || b == 1) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 10:
                n = "Ngọ";
                if (b == 7 || b == 1 || b == 4) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 6 || b == 2) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
            case 11:
                n = "Mùi";
                if (b == 8 || b == 2 || b == 5) {
                    document.getElementById('result_bad').style.display = 'block'
                } else if (b == 3 || b == 7) {
                    document.getElementById('result_good').style.display = 'block'

                } else {
                    document.getElementById('result_none').style.display = 'block'
                }
                break;
        }
    }
}