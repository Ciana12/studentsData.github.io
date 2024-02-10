document.addEventListener("DOMContentLoaded", function () {
    // Sample student data with coordinates
    const students = [
        { name: "Jhon Lhiel Fabular", address: "barangay 18 tondo manila", lat: 14.6301, lon: 120.9637 },
        { name: "Maria Bagalay", address: "Brgy 39 tondo manila", lat: 14.6223, lon: 120.9662 },
        { name: "Christian Agonia", address: "brgy 31 tondo manila", lat: 14.6286, lon: 120.9702 },
        { name: "Rhea Garcia", address: "Barangay 42 tondo manila", lat: 14.6204, lon: 120.9713 },
        { name: "Carl Jude Jumao-as", address: "Barangay 650 tondo Manila", lat: 14.6267, lon: 120.9741 },
        { name: "Leonardo Capote", address: "barangay 275 binondo manila", lat: 14.6021, lon: 120.9754 },
        { name: "Marjoss Ventura, Justine Cagadas, Gabrielle Relosa", address: "brgy 649", lat: 14.587861, lon: 120.957694 },
        { name: "James M Legaspino", address: "Brgy 285 binondo manila", lat: 14.6043, lon: 120.9751 },
        { name: "Anthony Gabriel A. Sistèr", address: "Baranggay 20, Tondo", lat: 14.6271, lon: 120.9689 },
        { name: "Ferdinand U. Liscano", address: "Brgy 38, tondo", lat: 14.6241, lon: 120.9671 },
        { name: "LA Montanejos", address: "Baranggay 20, Tondo", lat: 14.6271, lon: 120.9689 },
        { name: "Ramon Gabriel Tizon", address: "Baranggay 32, Tondo", lat: 14.6286, lon: 120.9744 },
        { name: "Jeric Ciervo", address: "Brgy 649", lat: 14.6412, lon: 120.9735 },
        { name: "Maria Cristel Domingo", address: "Barangay 28, Tondo", lat: 14.6051, lon: 120.9669 },
        { name: "Cherry", address: "barangay 310, LRC Sta. cruz RECTO MANILA", lat: 14.6142, lon: 120.9739 },
        { name: "Diana Ashly Vinus", address: "Barangay 286, binondo", lat: 14.6022, lon: 120.9742 },
        { name: "Datu Zaid Rango", address: "Barangay 28, Tondo", lat: 14.6051, lon: 120.9669 },
        { name: "Trisha Buzon", address: "Brgy 284 Binondo Manila", lat: 14.6027, lon: 120.9751 },
        { name: "Elmo Casa", address: "barangay 29.tondo manila", lat: 14.6287, lon: 120.9633 },
        { name: "Janela Antolin Yetyet", address: "Brgy 286 binondo", lat: 14.6019, lon: 120.9744 },
        { name: "Bienmar Silvestre", address: "Brgy 11 tondo manila", lat: 14.6211, lon: 120.9676 },
        { name: "funelas, rub", address: "brgy 275 binondo manila", lat: 14.6046, lon: 120.9748 },
        { name: "Tapiador, James Orly", address: "brgy 281 binondo manila", lat: 14.6005, lon: 120.9686}

        // Add more student data as needed
    ];

    // Initialize the map
    const map = L.map('map').setView([14.6304, 120.9662], 12); // Default center at Manila

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for each student
    students.forEach(student => {
        const marker = L.marker([student.lat, student.lon]).addTo(map);
        marker.bindPopup(student.name);
        marker.on('click', () => displayStudentDetails(student));
    });

    // Function to display student details
    function displayStudentDetails(student) {
        const detailsContainer = document.getElementById('student-details');
        detailsContainer.innerHTML = `<h2>${student.name}</h2>
                                      <p>Address: ${student.address}</p>
                                      <p>Latitude: ${student.lat}</p>
                                      <p>Longitude: ${student.lon}</p>`;
    }
});