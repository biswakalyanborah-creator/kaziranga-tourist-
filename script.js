const packagesData = [
    {
        title: "Kohora Range (Central)",
        price: "₹3,500 / Jeep",
        desc: "The heart of Kaziranga. High density of Great Indian Rhinos and scenic grassland views.",
        img: "https://images.unsplash.com/photo-1534178631360-155e9de45688?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Bagori Range (Western)",
        price: "₹3,500 / Jeep",
        desc: "Famous for close-range rhino sightings, water buffaloes, and beautiful wetlands.",
        img: "https://images.unsplash.com/photo-1564760055775-d63b19a55388?auto=format&fit=crop&w=600&q=80"
    }
];

const employeesData = [
    { name: "Rahul Borah", role: "Senior Guide - 9101000000" }
];

function renderPackages() {
    const container = document.getElementById('dynamicPackagesContainer');
    if (!container) return;
    container.innerHTML = '';
    packagesData.forEach(pkg => {
        container.innerHTML += `
            <div class="pkg-card">
                <img src="${pkg.img}" class="pkg-img" onerror="this.src='https://images.unsplash.com/photo-1564760055775-d63b19a55388?auto=format&fit=crop&w=600&q=80'">
                <div class="pkg-body">
                    <div class="pkg-title">${pkg.title}</div>
                    <div class="pkg-desc">${pkg.desc}</div>
                    <div class="pkg-footer">
                        <div class="pkg-price">${pkg.price}</div>
                        <button class="btn-gold" onclick="selectSafari('${pkg.title}')">Book Now</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderEmployees() {
    const list = document.getElementById('employeeDisplayList');
    if (!list) return;
    list.innerHTML = '';
    if (employeesData.length === 0) {
        list.innerHTML = '<div class="employee-item"><span>No employees added yet</span></div>';
        return;
    }
    employeesData.forEach(emp => {
        list.innerHTML += `<div class="employee-item"><span>${emp.name} (${emp.role})</span><span>Active</span></div>`;
    });
}

function addNewPackage() {
    const titleInput = document.getElementById('admTitle');
    const priceInput = document.getElementById('admPrice');
    const descInput = document.getElementById('admDesc');
    const imgInput = document.getElementById('admImg');

    if (!titleInput || !priceInput) return;

    const title = titleInput.value.trim();
    const price = priceInput.value.trim();
    const desc = descInput ? descInput.value.trim() : '';
    const img = imgInput ? imgInput.value.trim() : '';

    if (!title || !price) {
        alert('Kripya Package Title aur Price bharein.');
        return;
    }

    packagesData.unshift({
        title: title,
        price: price,
        desc: desc || 'Exciting wildlife safari tour slot.',
        img: img || 'https://images.unsplash.com/photo-1534178631360-155e9de45688?auto=format&fit=crop&w=600&q=80'
    });

    renderPackages();
    alert('Package successfully added!');
    switchTab('home', document.querySelectorAll('.nav-btn')[0]);
}

function addEmployee() {
    const nameInput = document.getElementById('empName');
    const roleInput = document.getElementById('empRole');

    if (!nameInput || !roleInput) return;

    const name = nameInput.value.trim();
    const role = roleInput.value.trim();

    if (!name || !role) {
        alert('Kripya Employee Name aur Role/Phone bharein.');
        return;
    }

    employeesData.push({ name: name, role: role });
    renderEmployees();
    alert('Employee successfully added!');
    nameInput.value = '';
    roleInput.value = '';
    switchTab('profile', document.querySelectorAll('.nav-btn')[3]);
}

function switchTab(tabName, btnElement) {
    document.querySelectorAll('.page-panel').forEach(panel => panel.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const activePanel = document.getElementById('panel-' + tabName);
    if (activePanel) activePanel.classList.add('active');
    if (btnElement) btnElement.classList.add('active');
    window.scrollTo(0, 0);
}

function selectSafari(rangeName) {
    const select = document.getElementById('bookRange');
    if (select) {
        select.value = rangeName;
    }
    switchTab('booking', document.querySelectorAll('.nav-btn')[1]);
}

function submitBooking() {
    const nameInput = document.getElementById('bookName');
    const rangeInput = document.getElementById('bookRange');
    const dateInput = document.getElementById('bookDate');
    const guestsInput = document.getElementById('bookGuests');

    if (!nameInput || !dateInput) return;

    const name = nameInput.value.trim();
    const range = rangeInput ? rangeInput.value : '';
    const date = dateInput.value;
    const guests = guestsInput ? guestsInput.value : '';

    if (!name || !date) {
        alert('Kripya apna Naam aur Date zaroor bharein.');
        return;
    }

    const msg = `Hello Somnath Borah, I want to book a Safari:%0A- Name: ${name}%0A- Range: ${range}%0A- Date: ${date}%0A- Guests: ${guests}`;
    window.open(`https://wa.me/919101311494?text=${msg}`, '_blank');
}

window.addEventListener('DOMContentLoaded', () => {
    renderPackages();
    renderEmployees();
});
