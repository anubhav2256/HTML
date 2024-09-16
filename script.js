function calculateCountdown() {
   (!birthdayInput) {
        alert('Please enter a valid birthday');
        r const birthdayInput = document.getElementById('birthday').value;
    if eturn;
    }

    const today = new Date();
    const birthday = new Date(birthdayInput);
    
    birthday.setFullYear(today.getFullYear());
    
    // If birthday has already passed this year, set the year to the next
    if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const timeDiff = birthday - today;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').textContent = `Your birthday is in ${daysRemaining} days!`;
}