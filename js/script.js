document.addEventListener('DOMContentLoaded', function() {
    const packages = document.querySelectorAll('.package');

    packages.forEach(pkg => {
        const plusButton = pkg.querySelector('.plus');
        const minusButton = pkg.querySelector('.minus');
        const amountElement = pkg.querySelector('.amount');
        const roomsElement = pkg.querySelector('.rooms');
        const signupButton = pkg.querySelector('.signup');
        const thankYouMessage = pkg.querySelector('.thank-you-message');

        plusButton.addEventListener('click', () => {
            updatePackage(pkg, 1);
        });

        minusButton.addEventListener('click', () => {
            updatePackage(pkg, -1);
        });

        signupButton.addEventListener('click', () => {
            showThankYouMessage(pkg);
        });

        function updatePackage(pkg, change) {
            const basePrice = pkg.classList.contains('basic') ? 199 : 249;
            let rooms = parseInt(roomsElement.textContent);
            rooms = Math.max(1, rooms + change); // Ensure rooms do not go below 1
            const newPrice = basePrice * rooms;
            roomsElement.textContent = `${rooms} room${rooms > 1 ? 's' : ''}`;
            amountElement.textContent = `$${newPrice}`;
        }

        function showThankYouMessage(pkg) {
            const rooms = parseInt(roomsElement.textContent);
            thankYouMessage.textContent = `Thank you for choosing ${rooms} room${rooms > 1 ? 's' : ''}`;
        }
    });
});
