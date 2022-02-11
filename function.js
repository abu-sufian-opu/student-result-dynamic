
/**
 * Data Send to Ls
 * @param {*} key 
 * @param {*} arr 
 * @returns 
 */

function dataSend (key, arr) {
    let data = JSON.stringify(arr);
    localStorage.setItem( key, data);

    return true;
};

/**
 * Data Get from Ls
 * @param {*} key 
 * @returns 
 */
function dataGet (key){

   let data = localStorage.getItem(key);

   return data ? JSON.parse(data) : [] ;
};

/**
 * Subject Marks Validation Function
 * @param {*} mark 
 * @returns 
 */
function markVal(mark){
    let sub_mark = parseInt(mark)
    if(sub_mark < 0 || sub_mark > 100){
        return false;
    }else{
        return true;
    }
}
