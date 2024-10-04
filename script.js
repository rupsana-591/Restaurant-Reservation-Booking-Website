// script.js

document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservationForm');
    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    
    // Predefined available time slots for a specific day
    const availableTimeSlots = {
    '2024-09-30': [
        '12:00 ', // 12:00 in the afternoon
        '2:00 ',  // 2:00 in the afternoon
        '4:00 ',  // 4:00 in the afternoon
        '6:00 '   // 6:00 in the evening
    ],
    '2024-09-01': [
        '12:00 ', // 12:00 in the afternoon
        '2:00 ',  // 2:00 in the afternoon
        '4:00 ',  // 4:00 in the afternoon
        '6:00 '   // 6:00 in the evening
    ],
    '2024-10-01': [
        '12:00 ', // 12:00 in the afternoon
        '2:00 ',  // 2:00 in the afternoon
        '4:00 ',  // 4:00 in the afternoon
        '6:00 '   // 6:00 in the evening
    ],
    '2024-11-01': [
        '12:00 ', // 12:00 in the afternoon
        '2:00 ',  // 2:00 in the afternoon
        '4:00 ',  // 4:00 in the afternoon
        '6:00 '   // 6:00 in the evening
    ],
    '2024-12-01': [
        '12:00 ', // 12:00 in the afternoon
        '2:00 ',  // 2:00 in the afternoon
        '4:00 ',  // 4:00 in the afternoon
        '6:00 '   // 6:00 in the evening
    ],
   
   
    
        // Add more dates and corresponding time slots here
    };

    // Function to populate time slots based on selected date
    function populateTimeSlots(date) {
        // Clear previous options
        timeSelect.innerHTML = '<option value="">Select a time slot</option>';
        const slots = availableTimeSlots[date];

        if (slots) {
            slots.forEach(slot => {
                const option = document.createElement('option');
                option.value = slot;
                option.textContent = slot + ' PM';
                timeSelect.appendChild(option);
            });
        }
    }

    // Event listener for date input
    dateInput.addEventListener('change', (e) => {
        const selectedDate = e.target.value;
        populateTimeSlots(selectedDate);
    });

    // Handle form submission
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = dateInput.value;
        const time = timeSelect.value;
        const guests = document.getElementById('guests').value;

        // Create reservation object
        const reservation = {
            name,
            email,
            date,
            time,
            guests,
        };

        // Save to localStorage
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(reservations));

        // Optionally, reset the form
        reservationForm.reset();
        timeSelect.innerHTML = '<option value="">Select a time slot</option>'; // Reset time select
        alert('Reservation booked successfully!');
    });
});
