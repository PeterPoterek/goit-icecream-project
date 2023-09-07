const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".modal-btn");
const overley = document.querySelector("#overley");

btns.forEach(btn => { 
    btn.addEventListener('click', () => { 
        document.querySelector(btn.dataset.target).classList.add("active");
        overley.classList.add('active');
    })
})

close_btns.forEach(btn => { 
    btn.addEventListener('click', () => { 
        document.querySelector(btn.dataset.target).classList.remove("active");
        overley.classList.remove('active');
    })
})

window.onclick = (e) => { 
    if (e.target == overley) { 
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overley.classList.remove('active');
    }
}