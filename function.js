

/**
 * DATA SET to LS
 * @param {*} key 
 * @param {*} arr 
 * @returns 
 */
 function dataSend(key, arr){
    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);
    return true;
};



/**
 * DATA GEt form LS
 * @param {*} key 
 * @returns 
 */
function dataGet(key){
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : false;
};