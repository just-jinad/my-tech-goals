document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]')
    const currentDay = document.querySelector('[data-testid="currentDay"]')

    function updateTime() {
        const now = new Date()
        currentTimeUTC.innerHTML = now.toUTCString().split(' ')[4]
    }

    function updateDay() {
        const now = new Date()
        console.log(now)
        currentDay.innerHTML =  now.toUTCString().split(' ')[0]
    }

    updateTime()
    updateDay()
    setInterval(updateTime, 1000)
});
