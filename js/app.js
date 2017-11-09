var container = document.querySelector('.tictactoe');
container.addEventListener('click', onCellClick);
function onCellClick(event){
    var target = event.target;
    var dataset = target.dataset;
    //console.log(dataset);
    //console.log('target', target);
    if ( dataset && dataset.row) {
        console.log('pos',dataset.row, dataset.column);

    }
}
function tictactoe (){
    this.matrix =[
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
}
TicTacToe.prototype.output = function(){
    return this.matrix;
};
function Reset(){
    //console.log(');
    var game = new TicTacToe();
    render(game.output());
}
function render(matrix){
    var values = matrix.reduce(function(array, row, rowIndex){
        return array.concat(row.map(function(cell){
            return{
                value: cell,
                id:'cell-´+rowIndex+'-'+ cellIndex
            }
        }))
    }, []);
    // console.log(values);

    values.forEach(function(cell){
        var cellElement = document.getElementById(cell.id);
        cellElement.innertHTML = cell.value !==null ? cell.value:'';
    })
    }
//
reset();