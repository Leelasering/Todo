window.onload = function () {

    class Matrix {
        constructor() {
            this.n = 5;
            this.m = 5;
            this.mas = [];
            for (let i = 0; i < this.m; i++) {
                this.mas[i] = [];
                for (let j = 0; j < this.n; j++) {
                    this.mas[i][j] = Math.trunc(Math.random() * 20 - 10);
                    //this.mas[i][j] = Number(prompt('Введите элемент массива mas['+i+']['+j+']'));
                }
            }
            console.log(this.mas);

        }

        mult_col_row = (col, row) => {
            //get column
            console.log('//get column № ' + col);
            this.col_arr = [];
            for (let i = 0; i < this.m; i++) {
                this.col_arr = [...this.col_arr, this.mas[i][col]];
            }

            console.log(this.col_arr);
            //get row
            console.log('//get row № ' + row);
            this.row_arr = [];
            for (let i = 0; i < this.n; i++) {
                this.row_arr = [...this.row_arr, this.mas[row][i]];
            }
            console.log(this.row_arr);
            console.log('//get result');
            if (this.n == this.m) {
                this.result = [];
                this.mult = 0;
                for (let i = 0; i < this.n; i++) {
                    this.mult = this.row_arr[i] * this.col_arr[i]
                    this.result = [...this.result, this.mult];
                }
                console.log(this.result);
                return (this.result);
            } else {
                console.log('Матрица не квадратная => результат невозможно посчитать');
            }
        }

        sort_arr = () => {
            console.log('//get sort matrix')
            this.mas_s = [...this.mas];
            for (let i = 0; i < this.m; i++) {
                this.mas_s[i] = [...this.mas[i]];
            }

            this.one_mas = [];

            for (let i = 0; i < this.m; i++) {
                for (let j = 0; j < this.n; j++) {
                    this.one_mas = [...this.one_mas,this.mas_s[i][j]];
                }
            }
            //.reverse();
            this.one_mas = (this.one_mas.sort());

            for (let i = 0; i < this.m; i++) {
                for (let j = 0; j < this.n; j++) {
                    this.mas_s[i][j] = this.one_mas[0];
                    this.one_mas.shift();
                }
            }

            console.log(this.mas_s);
            return(this.mas_s);
        }


    };
    let arr = new Matrix;
    let mult = arr.mult_col_row(1, 2);
    let arr_s = arr.sort_arr();
}