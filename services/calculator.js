
const prices = {
    'Business':2000,
    'Store':1000,
    'Blog':1500,
    'extraPage':200,
    'custom':1000
}
    const result = document.getElementById('resultdisplay');
    const calculate = document.getElementById('calculatebtn');
    const reset = document.getElementById('resetbtn');
    const sitetype = document.getElementsByName('sitetype');
    const pageamount = document.getElementById('pageamount');
    const wantCustom = document.getElementById('wantCustom');

function calculatePrice(){
    let totalprice = 0;
    for(let type of sitetype)
    {
        if(type.checked){
            totalprice += prices[type.value];
            break;
        }
    }
    const pages = pageamount.selectedIndex;
    totalprice += prices.extraPage * pages;
    if(wantCustom.checked)
    {
        totalprice += prices.custom;
    }   
    result.textContent = totalprice;
    result.style.display = 'block';
}

function resetfunc(){
    result.style.display = 'none';
    sitetype[0].checked = true;
    pageamount.selectedIndex = 0;
    wantCustom.checked = true;
}

calculate.addEventListener('click', calculatePrice);

reset.addEventListener('click', resetfunc);

