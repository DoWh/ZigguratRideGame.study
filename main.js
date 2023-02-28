console.log('main.js');

const zig = {
    state: [],
    dirrection: 'right',
    block: document.getElementById('zig'),
    drow(){
        let row,col;
        for (let i = 0; i < this.state.length; i++) {
            row = document.createElement('div');
            row.setAttribute('class', `row row${i}`);
            for (let j = 0; j < this.state[i].length; j++) {
                col = document.createElement('div');
                col.setAttribute('class', `col col${j}`);
                col.setAttribute('status', '0');
                col.innerHTML = '';
                if (i==0) {
                    col.setAttribute('status', '-1');
                    col.innerHTML = j;
                }
                if (j==0) {
                    col.setAttribute('status', '-1');
                    col.innerHTML = i;
                }
                this.state[i][j] = col;
                row.append(col);
            }
            this.block.append(row);
        }
    },
    clear(){
        this.block.innerHTML = '';
    },
    add_click(){
        function change_pipe(){
            switch (this.getAttribute('status')) {
                case '0':
                    let img = document.createElement('img')
                    img.setAttribute('src', '/img/pipe1.png')
                    this.append(img);
                    this.setAttribute('status','1')
                    break;
                case '1':
                    this.firstChild.setAttribute('src', '/img/pipe2.png')
                    this.setAttribute('status','2')
                    break;
                case '2':
                    this.firstChild.setAttribute('src', '/img/pipe3.png')
                    this.setAttribute('status','3')
                    break;
                case '3':
                    this.firstChild.setAttribute('src', '/img/pipe1.png')
                    this.setAttribute('status','1')
                    break;
            }
        }
        for (let i = 0; i < this.state.length; i++) {
            for (let j = 0; j < this.state[i].length; j++) {
                this.state[i][j].addEventListener('click', change_pipe)
            }
        }
    },
    move(){
        
    }
}




document.getElementById('create_ziggurat_btn').addEventListener('click', ()=>{
    let x = Number(document.getElementById('create_ziggurat_x').value);
    let y = Number(document.getElementById('create_ziggurat_y').value);
    if (
        (x != 0)   && 
        (y != 0)   &&
        (x >= 5)    && 
        (y >= 5)    && 
        (x <= 100)  && 
        (y <= 100)) 
    {
        zig.clear()
        zig.state = Array(x+1).fill().map(() => Array(y).fill(y+1))
        
        zig.drow()
        
        // document.getElementById('create_ziggurat').style.display = 'none';
        // console.log(state.ziggurat_y)
        zig.add_click();
    }
});
document.getElementById('create_ziggurat').style.display = 'none';
setTimeout( ()=>{
    zig.clear()
    zig.state = Array(11).fill().map(() => Array(11).fill()) 
    zig.drow()
    zig.add_click();
}, 100 );