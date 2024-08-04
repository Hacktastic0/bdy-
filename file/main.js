// Function to update the countdown timer
document.getElementById('background-audio').muted=true;
function updateCountdown(endDate) {
    const now = new Date().getTime();
    const distance = endDate - now;  
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  
    // When the countdown is over
    if (distance < 0) { 
      clearInterval(timerInterval);
      document.getElementById('countdown').innerHTML = '';
      document.getElementById('myButton').style.display = 'block';
      document.getElementById('btn').style.display = 'block';
      document.getElementById('backgroundVideo').style.display = 'block';
      document.getElementById('background-audio').muted=false;
      document.body.style.background = 'none';  // Remove any background color
    } 
  }
  
  // Set the date we're counting down to
  const countdownDate = new Date('August 5, 2024 00:00:00').getTime();
  
  // Update the countdown every 1 second
  const timerInterval = setInterval(() => {
    updateCountdown(countdownDate);
  }, 1000);
  
