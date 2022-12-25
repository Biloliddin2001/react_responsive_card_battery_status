navigator.getBattery().then(battery => {
    let percentage = document.querySelector('.percentage');
    let foiz_battery = document.querySelector('.foiz');

    function updateAllBatteryInfo() {
        updateLevelinfo()
        updateChargeInfo()
    }
    updateAllBatteryInfo()

    function updateLevelinfo() {
        percentage.style.width = battery.level * 100 + '%';
        foiz_battery.innerHTML = battery.level * 100 + '%';
        let procent = battery.level * 100 + '%';
        let full_charge = new SpeechSynthesisUtterance("Компютер полный заряжена")
        let isFull = procent == 100 + '%' ? speechSynthesis.speak(full_charge) : ""
        setTimeout(() => {
            let voise_charge = new SpeechSynthesisUtterance(`Заряд устройства ${procent}`)
            speechSynthesis.speak(voise_charge)
        }, 1300);
    }

    function updateChargeInfo() {
        const charging = new SpeechSynthesisUtterance("Зарядное устройства подключено")
        battery.charging ? speechSynthesis.speak(charging) : ""
        const logo_battery = document.querySelector('.my-icon')
        !battery.charging ? logo_battery += logo_battery.style.display = 'none' : logo_battery += logo_battery.style.display = 'block';
    }

    battery.addEventListener('charging', () => {
        updateChargeInfo()
    })

    battery.addEventListener('levelchange', () => {
        updateLevelinfo()
    })
})

setTimeout(() => {
    let avtor = new SpeechSynthesisUtterance(`Привет меня зовут веб-дизайн, 
                                я голосовой помошник для статуса своей батарея , спасибо за внимание, 
                                и мне создан веб-программист Билол`)
    speechSynthesis.speak(avtor)
}, 2000)