// Sample JS to simulate data and basic actions
const orders = sampleOrders.length;
const customers = sampleCustomers.length;
const revenue = sampleOrders.reduce((s,o)=>s+o.total,0);
const elP = document.getElementById('stat-products'); if(elP) elP.textContent = prod;
const elO = document.getElementById('stat-orders'); if(elO) elO.textContent = orders;
const elC = document.getElementById('stat-customers'); if(elC) elC.textContent = customers;
const elR = document.getElementById('stat-revenue'); if(elR) elR.textContent = '₹' + revenue;


// recent orders
const recent = document.getElementById('recent-orders');
if(recent){
recent.innerHTML = sampleOrders.slice(0,3).map(o=>`<div><strong>${o.customer}</strong> — ₹${o.total}</div>`).join('');
}


// chart
const ctx = document.getElementById('salesChart');
if(ctx){
new Chart(ctx,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{label:'Sales',data:[12,19,8,14,20,18],fill:false}]},options:{responsive:true}});
}



// Add product form handling (local only)
const form = document.getElementById('addProductForm');
if(form){
form.addEventListener('submit',function(e){
e.preventDefault();
const pName = document.getElementById('pName').value;
const pPrice = parseFloat(document.getElementById('pPrice').value)||0;
const pCategory = document.getElementById('pCategory').value;
const pImage = document.getElementById('pImage').value || 'img/dummy-product.jpg';
const pDesc = document.getElementById('pDesc').value;
const nextId = Math.max(...sampleProducts.map(p=>p.id))+1;
sampleProducts.push({id:nextId,name:pName,price:pPrice,category:pCategory,image:pImage,desc:pDesc});
alert('Product added (local only).');
window.location = 'products.html';
});
}


// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded',function(){
populateProducts();
populateOrders();
populateCustomers();
populateDashboard();


// sidebar toggle (if present)
const btn = document.getElementById('sidebarToggle');
if(btn){
btn.addEventListener('click',function(){
const sidebar = document.getElementById('sidebar');
sidebar.classList.toggle('d-none');
});
}
});
