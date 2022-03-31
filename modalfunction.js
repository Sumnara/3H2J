const open1 = document.getElementById('open1')
const open2 = document.getElementById('open2')
const open3 = document.getElementById('open3')
const open4 = document.getElementById('open4')
const open5 = document.getElementById('open5')
const modal_wrapper1 = document.getElementById('modal_wrapper1')
const modal_wrapper2 = document.getElementById('modal_wrapper2')
const modal_wrapper3 = document.getElementById('modal_wrapper3')
const modal_wrapper4 = document.getElementById('modal_wrapper4')
const modal_wrapper5 = document.getElementById('modal_wrapper5')
const close1 = document.getElementById('close1')
const close2 = document.getElementById('close2')
const close3 = document.getElementById('close3')
const close4 = document.getElementById('close4')
const close5 = document.getElementById('close5')

open1.addEventListener('click', () => {
    modal_wrapper1.classList.add('show');
});

open2.addEventListener('click', () => {
    modal_wrapper2.classList.add('show');
});

open3.addEventListener('click', () => {
    modal_wrapper3.classList.add('show');
});

open4.addEventListener('click', () => {
    modal_wrapper4.classList.add('show');
});

open5.addEventListener('click', () => {
    modal_wrapper5.classList.add('show');
});

close1.addEventListener('click', () => {
    modal_wrapper1.classList.remove('show');
});

close2.addEventListener('click', () => {
    modal_wrapper2.classList.remove('show');
});

close3.addEventListener('click', () => {
    modal_wrapper3.classList.remove('show');
});

close4.addEventListener('click', () => {
    modal_wrapper4.classList.remove('show');
});

close5.addEventListener('click', () => {
    modal_wrapper5.classList.remove('show');
});